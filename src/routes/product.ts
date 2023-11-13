import { Request, Router, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send({data: "data"})
})

export default router;