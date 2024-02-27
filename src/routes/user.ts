import express from "express";

const router = express.Router();

import * as userController from "../controllers/user";
import { login, refresh } from "../services/auth";

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post("/", userController.createUser);

router.post("/login", userController.loginUser, login);

router.post("/refresh", refresh)

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);


module.exports = router;