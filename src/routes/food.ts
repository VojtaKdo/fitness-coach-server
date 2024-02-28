import express from "express";

const router = express.Router();

import * as foodController from "../controllers/food";

import { verify, auth } from "../services/auth";

router.get("/", verify, foodController.getAllFood);

router.get("/:id", verify, foodController.getFoodById);

router.post("/", verify, auth(["admin"]), foodController.createFood);

router.put("/:id", verify, auth(["admin"]), foodController.updateFood);

router.delete("/:id", verify, auth(["admin"]), foodController.deleteFood);


module.exports = router;