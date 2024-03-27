import express from "express";
import UserController from "../Controller/userController.js";
import authMiddleware from "../Middleware/authenMiddleware.js";

const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.use(authMiddleware);

export default router;
