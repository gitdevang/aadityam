import Property from '@/models/propertyModel';
import { parse } from 'cookie';
import connectToDatabase from '@/utlis/connectMongo';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const cookies = parse(req.headers.cookie || '');    
    const accessToken = cookies.accessToken;

    console.log('accessToken:', accessToken);

    if (!accessToken) {
        return res.status(401).json({ message: 'Unauthorized' });
    } 

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (!decoded) {
      console.log('Invalid or Expired jwtoken');
      return res.status(401).json({ message: 'Invalid or Expired jwtoken' });
    }

    await connectToDatabase();

    if (req.method === 'GET') {
      const properties = await Property.find({});
      return res.status(200).json({ data: properties });
    }

    if (req.method === 'POST') {
      const data = req.body;
      const newProperty = new Property(data);
      await newProperty.save();
      return res.status(201).json({ success: true, message: 'Property created successfully', data: newProperty });
    }

    return res.status(405).json({ success: false, message: 'Method Not Allowed' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Failed to process request' });
  }
}
