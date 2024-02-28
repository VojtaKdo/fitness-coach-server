import express from "express";

const router = express.Router();

import * as adminController from "../controllers/admin";
import { verify, auth } from "../services/auth";

router.get("/dashboard", verify, auth(["admin"]), adminController.getDashboard);


module.exports = router;