const cloudinary = require("./cloudinaryConfig");

const uploadImage = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "property_images", // Folder name in Cloudinary
    });
    return result.secure_url; // Return the uploaded image URL
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload image");
  }
};

module.exports = { uploadImage };
