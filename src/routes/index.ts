import { Router } from "express";
import postRoutes from "./postRoutes";

const router = Router();

router.use("/posts", postRoutes);

export default router;
