// pages\api\property\[id].js
import connectToDatabase from "../../../utlis/connectMongo";
import Property from "../../../models/propertyModel";
import jwt from 'jsonwebtoken';
import { parse } from 'cookie';  // Import cookie parsing utility

export default async function handler(req, res) {
    const { id } = req.query;
    
    // Parse the cookies from the request headers
    const cookies = parse(req.headers.cookie || '');    
    const accessToken = cookies.accessToken;

    console.log('accessToken:', accessToken);

    if (!accessToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the access token
        const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
        if (!decoded) {
            console.log('Invalid or Expired JWT');
            return res.status(401).json({ message: 'Invalid or Expired JWT' });
        }

        await connectToDatabase();

        // Handle the GET request
        if (req.method === 'GET') {
            const property = await Property.find({ _id: id });
            if (property.length === 0) {
                return res.status(404).json({ success: false, message: 'Property not found' });
            }
            return res.status(200).json({ success: true, data: property });
        }

        // Handle the PATCH request
        if (req.method === 'PATCH') {
            const updatedProperty = await Property.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
            );
            if (!updatedProperty) {
                return res.status(404).json({ success: false, message: 'Property not found' });
            }
            return res.status(200).json({ success: true, data: updatedProperty, message: 'Property Updated' });
        }

        // Return 405 if the method is not allowed
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Failed to process request' });
    }
}
