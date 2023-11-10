import { Request, Router, Response } from "express";

const router = Router();

router.get("/product", (req: Request, res: Response) => {
    res.send({data: "AQUI VAN LOS MODELOS"})
})

export { router }