import express from "express";
import postRoutes from "./postRoutes.js";
import userRoutes from "./userRoutes.js";
import commentRoutes from "./commentRoutes.js";

const router = express.Router();

router.use("/posts", postRoutes);
router.use("/user", userRoutes);
router.use("/comments", commentRoutes);

export default router;
