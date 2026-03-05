import { Router } from "express";
import { createRoom } from "../controllers/roomController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/room", authenticate, createRoom);

export default router;
