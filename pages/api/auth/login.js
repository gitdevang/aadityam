// pages/api/authenticate.js
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookie from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRATION = '25m';
const REFRESH_TOKEN_EXPIRATION = '7d';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD_HASH = "$2a$10$cI2wiOByaw90AW54eMAJcePjO4/Hg8LoK6tpI2De3uSisHs0ivXIy";

export const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  const refreshToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
  return { accessToken, refreshToken };
};

const verifyPassword = async (enteredPassword) => {
  const match = await bcrypt.compare(enteredPassword, ADMIN_PASSWORD_HASH);
  return match;
};

const authenticateUser = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  try {
    // Check if the username is correct
    if (username !== ADMIN_USERNAME) {
      return res.status(401).json({ message: 'Authentication failed! Invalid username.' });
    }

    // Verify password
    const match = await verifyPassword(password.trim());
    if (match) {
      const { accessToken, refreshToken } = generateTokens(username);
      res.setHeader('Set-Cookie', [
        cookie.serialize('refreshToken', refreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 7 * 24 * 60 * 60, // 7 days
          path: '/',
          sameSite: 'Strict', // or 'Lax'
        }),
        cookie.serialize('accessToken', accessToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 25 * 60, // 25 minutes
          path: '/',
          sameSite: 'Strict', // or 'Lax'
        }),
      ]);
      
      res.status(200).json({ message: 'Authenticated successfully!'});
    } else {
      res.status(401).json({ message: 'Authentication failed! Invalid password.' });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(500).json({ message: 'Internal server error!' });
  }
};

export default authenticateUser;
