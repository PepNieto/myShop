import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenData extends Request {
    user?: Object; 
  }

const checkToken = (req: TokenData, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
        req.user = decoded; 
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized!' });
    }
};
export { checkToken }