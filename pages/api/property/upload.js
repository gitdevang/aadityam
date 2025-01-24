import fs from 'fs';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';
import { uploadImage } from "../../../utlis/cloudinary";

const upload = multer({
  dest: "/tmp",
  limits: { 
    files: 10,
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error("Only JPEG, PNG, and WebP files are allowed"), false); // Reject the file
    }
  }  
});


const uploadMiddleware = upload.array("images[]");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const cookies = parse(req.headers.cookie || '');
  const accessToken = cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: 'Invalid or Expired token' });
    }

    if (req.method === "POST") {
      uploadMiddleware(req, res, async (err) => {
        if (err) {
          if (err.code === "LIMIT_UNEXPECTED_FILE") {
            return res.status(400).json({
              success: false,
              error: "You can only upload a maximum of 10 files.",
            });
          } else if (err.message === "Only JPEG, PNG, and WebP files are allowed") {
            return res.status(400).json({ success: false, error: err.message });
          }
          return res.status(500).json({ success: false, error: err.message });
        }

        try {
          let imgUrls = [];
          console.log("req.files",req.files)
          for (const file of req.files) {
            const imageUrl = await uploadImage(file.path);
            imgUrls.push(imageUrl);

            fs.unlink(file.path, (err) => {
              if (err) {
                console.error(`Failed to delete temp file: ${file.path}`);
              }
            });
          }

          res.status(200).json({ success: true, imgUrls });
        } catch (error) {
          res.status(500).json({ success: false, error: error.message });
        }
      });
    } else {
      res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Failed to process request' });
  }
}
