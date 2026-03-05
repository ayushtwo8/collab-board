import { Router } from "express";
import { profileInfo, signin, signup } from "../controllers/authController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/me', authenticate, profileInfo);

export default router;