import { parse } from 'cookie';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';

export default async function handler(req, res) {
    console.log("Entered Token Renewal API");

    if (req.method !== 'POST') {
        console.log('Method not allowed');
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const cookies = parse(req.headers.cookie || '');
    const refreshToken = cookies.refreshToken;

    console.log('Refresh token:', refreshToken);

    if (!refreshToken) {
        console.log('Refresh token not found');
        return res.status(401).json({ message: 'Refresh token not found' });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ message: 'Refresh Token Expired' });
        }
        const newAccessToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET, { expiresIn: '25m' });
        console.log('New access token:', newAccessToken);
        res.setHeader('Set-Cookie', [
            cookie.serialize('accessToken', newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 25 * 60, // 25 minutes
                path: '/',
                sameSite: 'Strict', // or 'Lax'
            }),
        ]);
        res.status(200).json({ message: 'Access genrated successfully!' });
    } catch (error) {
        console.log('Error verifying refresh token:', error);
        return res.status(401).json({ message: 'Invalid refresh token' });
    }
}