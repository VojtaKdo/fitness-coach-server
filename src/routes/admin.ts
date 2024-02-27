import express from "express";

const router = express.Router();

import * as adminController from "../controllers/admin";
import { verify } from "../services/auth";

router.get("/dashboard", verify, adminController.getDashboard);


module.exports = router;