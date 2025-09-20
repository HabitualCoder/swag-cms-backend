import { Router } from "express";
import postRoutes from "./postRoutes";
import users from './userRoutes';

const router = Router();

router.use("/posts", postRoutes);
router.use('/users', users);

export default router;
