import express from "express";

const router = express.Router();

import * as mealsController from "../controllers/meals";

import { verify, auth } from "../services/auth";

router.get("/", verify, mealsController.getAllMeals);

router.get("/:id", verify, mealsController.getMealById);

router.post("/", verify, auth(["admin", "verified"]), mealsController.createMeal);

router.put("/:id", auth(["admin", "verified"]), mealsController.updateMeal);

router.delete("/:id", auth(["admin", "verified"]), mealsController.deleteMeal);


module.exports = router;