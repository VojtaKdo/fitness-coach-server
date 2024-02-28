import express from "express";

import { verify, auth } from "../services/auth";

const router = express.Router();

import * as achievementController from "../controllers/achievements";

router.get("/", verify, achievementController.getAllAchievements);

router.get("/:id",verify, achievementController.getAchievementById);

router.post("/",verify, auth(["admin"]), achievementController.createAchievement);

router.put("/:id",verify, auth(["admin"]), achievementController.updateAchievement);

router.delete("/:id",verify, auth(["admin"]), achievementController.deleteAchievement);


module.exports = router;