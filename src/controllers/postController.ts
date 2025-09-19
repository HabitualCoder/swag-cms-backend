import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Helper to generate slug from title
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// =========================
// CREATE POST
// =========================
export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: "Title and content are required" });
    }

    const slug = slugify(title);

    const post = await prisma.post.create({
      data: {
        title,
        content,
        slug,
        author: { connect: { id: 2 } }, // dummy user
      },
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// =========================
// GET ALL POSTS
// =========================
export const getPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: true },
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// =========================
// GET SINGLE POST BY SLUG
// =========================
export const getPostBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { author: true },
    });

    if (!post) return res.status(404).json({ error: "Post not found" });

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// =========================
// UPDATE POST
// =========================
export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        slug: title ? slugify(title) : undefined, // update slug if title changes
      },
    });

    res.json(post);
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
};

// =========================
// DELETE POST
// =========================
export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.post.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Post deleted successfully" });
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
};
