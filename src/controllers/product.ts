import { Request, Response } from "express";
import { handleHttpError } from "../../utils/error.handle";

const getSubsequence = (req: Request, res:Response) => {
    try{
        res.send("data")
    }
    catch(e){

        handleHttpError(res, 'ERROR_GET_SUBSEQUENCE')
    }
}


export {getSubsequence}