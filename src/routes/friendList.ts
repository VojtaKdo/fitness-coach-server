import express from "express";

const router = express.Router();

import * as friendController from "../controllers/friends";

import { verify, auth } from "../services/auth";

router.get("/", verify, friendController.getAllFriends);

router.get("/:id", verify, friendController.getFriendById);

router.delete("/:id", verify, friendController.deleteFriend);


module.exports = router;