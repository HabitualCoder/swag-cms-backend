import { Router } from "express";
import { auth } from "../middlewares/auth";
import {
  createPost,
  getPosts,
  getPostBySlug,
  updatePost,
  deletePost,
} from "../controllers/postController";

const router = Router();

// Public route: anyone can see published posts
router.get("/", getPosts);
router.get("/:slug", getPostBySlug);

// Protected routes: only logged-in users can create/update/delete
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
