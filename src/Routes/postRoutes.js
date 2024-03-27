import express from "express";
import postController from "../Controller/postController.js";

const router = express.Router();

router.post("/", postController.createPost);
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

export default router;
