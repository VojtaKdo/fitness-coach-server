import express from "express";

const router = express.Router();

import * as plansController from "../controllers/plans";

import { verify, auth } from "../services/auth";

router.get("/", verify, plansController.getAllPlans);

router.get("/:id", verify, plansController.getPlanById);

router.post("/", verify, plansController.createPlan);

router.put("/:id", verify, plansController.updatePlan);

router.delete("/:id", verify, plansController.deletePlan);


module.exports = router;