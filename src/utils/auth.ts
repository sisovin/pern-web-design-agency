import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRATION } from '../config/constants';

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export const decodeToken = (token: string) => {
  return jwt.decode(token);
};
