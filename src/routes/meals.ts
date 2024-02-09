import express from "express";

const router = express.Router();

import * as mealsController from "../controllers/meals";

router.get("/", mealsController.getAllMeals);

router.get("/:id", mealsController.getMealById);

router.post("/", mealsController.createMeal);

router.put("/:id", mealsController.updateMeal);

router.delete("/:id", mealsController.deleteMeal);


module.exports = router;