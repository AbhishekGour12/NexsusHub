import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';


export interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (req:AuthRequest, res:Response, next:NextFunction) => {
  try {
    // Extract token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) ;

    // Attach decoded user data to request
    req.user  = decoded 
    
    next();
  } catch (err) {
    console.error('JWT Error:', err);
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
