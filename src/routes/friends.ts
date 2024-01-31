import express from "express";

const router = express.Router();

import * as friendController from "../controllers/friends";

router.get("/", friendController.getAllFriends);

router.get("/:id", friendController.getFriendById);

router.delete("/:id", friendController.deleteFriend);


module.exports = router;