import type { Request, Response } from "express"
import jwt from 'jsonwebtoken'

export const signup = (req: Request, res: Response) => {
    // db call
}
export const signin = (req: Request, res: Response) => {
    const userId = 1;
    const token = jwt.sign({ userId}, process.env.JWT_SECRET as string);

    res.json({
        token
    })
}
export const profileInfo = (req: Request, res: Response) => {
    //db call
}