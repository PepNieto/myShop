import { Response } from "express";

const handleHttpError = (res: Response, message: String, error?: any) => {
    const response = {
        message: message,
        error: error ? error.message : null
    };
    res.status(500).send(response);

}


export { handleHttpError }