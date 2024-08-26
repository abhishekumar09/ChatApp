import express from "express";
import { signup, login, logout, getUserProfile } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUserProfile",getUserProfile);

export default router;