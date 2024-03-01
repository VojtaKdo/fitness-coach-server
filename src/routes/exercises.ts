import express from "express";

const router = express.Router();

import { verify, auth } from "../services/auth";

import * as exercisesController from "../controllers/exercises";

router.get("/", verify, exercisesController.getAllExercises);

router.get("/:id", verify, exercisesController.getExerciseById);

router.post("/", verify, auth(["admin", "verified"]), exercisesController.createExercise);

router.put("/:id", verify, auth(["admin", "verified"]), exercisesController.updateExercise);

router.delete("/:id", verify, auth(["admin", "verified"]), exercisesController.deleteExercise);


module.exports = router;