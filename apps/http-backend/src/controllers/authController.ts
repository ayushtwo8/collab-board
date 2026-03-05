import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema, SignInSchema } from "@repo/common/types";

export const signup = (req: Request, res: Response) => {
  const data = CreateUserSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
};
export const signin = (req: Request, res: Response) => {
  const data = SignInSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect inputs",
    });
    return;
  }
  const userId = 1;

  if (!JWT_SECRET) {
    throw new Error("No JWT_SECRET found");
  }
  const token = jwt.sign({ userId }, JWT_SECRET);

  res.json({
    token,
  });
};
export const profileInfo = (req: Request, res: Response) => {
  //db call
};
