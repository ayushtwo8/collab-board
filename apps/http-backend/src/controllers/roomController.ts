import type { Request, Response } from "express";

export const createRoom = (req: Request, res: Response) => {
 //db call

 res.json({
    roomId: 234
 })
}