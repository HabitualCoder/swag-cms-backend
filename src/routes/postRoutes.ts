import { Router } from "express";
import { createPost, getPosts, getPostBySlug, updatePost, deletePost } from "../controllers/postController";

const router = Router();

router.post("/add", createPost);      // create post
router.get("/", getPosts);            // get all posts
router.get("/:slug", getPostBySlug);  // get single post by slug
router.patch("/:id", updatePost);     // update post
router.delete("/:id", deletePost);    // delete post

export default router;
