import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/create", userController.showCreateForm);
router.post("/create", userController.create);

export default router;
