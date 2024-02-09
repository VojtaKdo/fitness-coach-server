import express from "express";

const router = express.Router();

import * as plansController from "../controllers/plans";

router.get("/", plansController.getAllPlans);

router.get("/:id", plansController.getPlanById);

router.post("/", plansController.createPlan);

router.put("/:id", plansController.updatePlan);

router.delete("/:id", plansController.deletePlan);


module.exports = router;