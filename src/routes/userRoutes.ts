import { Router } from "express";
import { signup, login, getMe } from "../controllers/userController";
import { auth } from "../middlewares/auth";

const router = Router();

router.post("/signup", signup);   // public
router.post("/login", login);     // public
router.get("/me", auth, getMe);   // protected

export default router;
