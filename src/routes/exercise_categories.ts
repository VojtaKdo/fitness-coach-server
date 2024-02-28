import express from "express";

import { verify, auth } from "../services/auth";

const router = express.Router();

import * as exerciseCategoriesController from "../controllers/exercise_categories";

router.get("/", verify, exerciseCategoriesController.getAllExerciseCategories);

router.get("/:id", verify, exerciseCategoriesController.getExerciseCategoryById);

router.post("/", verify, auth(["admin"]), exerciseCategoriesController.createExerciseCategory);

router.put("/:id", verify, auth(["admin"]), exerciseCategoriesController.updateExerciseCategory);

router.delete("/:id", verify, auth(["admin"]), exerciseCategoriesController.deleteExercise);


module.exports = router;