import express from "express";

const router = express.Router();

import * as achievementController from "../controllers/achievements";

router.get("/", achievementController.getAllAchievements);

router.get("/:id", achievementController.getAchievementById);

router.post("/", achievementController.createAchievement);

router.put("/:id", achievementController.updateAchievement);

router.delete("/:id", achievementController.deleteAchievement);


module.exports = router;