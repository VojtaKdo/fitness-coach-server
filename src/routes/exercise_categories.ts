import express from "express";

const router = express.Router();

import * as exerciseCategoriesController from "../controllers/exercise_categories";

router.get("/", exerciseCategoriesController.getAllExerciseCategories);

router.get("/:id", exerciseCategoriesController.getExerciseCategoryById);

router.post("/", exerciseCategoriesController.createExerciseCategory);

router.put("/:id", exerciseCategoriesController.updateExerciseCategory);

router.delete("/:id", exerciseCategoriesController.deleteExercise);


module.exports = router;