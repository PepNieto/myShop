
import express from 'express';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
const getToken = ( req: Request, res: Response ) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        return res.status(500).json({ message: "Secret key is not configured" });
    }
    const payload = {
      user: "Ed"
    }
    const token = jwt.sign(payload, secretKey, {
        expiresIn: '10m' 
    });
    
    return res.status(200).json({ token });

}

export { getToken };