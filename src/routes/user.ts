import express from "express";

const router = express.Router();

import * as userController from "../controllers/user";
import { login, refresh, verify, auth } from "../services/auth";

router.get("/", verify, userController.getAllUsers);

router.get("/:id", verify, userController.getUserById);

router.post("/", userController.createUser);

router.post("/login", userController.loginUser, login);

router.post("/refresh", refresh)

router.put("/:id", verify, userController.updateUser);

router.delete("/:id", verify, userController.deleteUser);


module.exports = router;