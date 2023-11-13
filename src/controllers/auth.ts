import { Request, Response } from "express";

const getSubsequence = (req: Request, res:Response) => {
    try{

    }
    catch(e){
        res.status(500);
        res.send('500');
    }
}


export {getSubsequence}