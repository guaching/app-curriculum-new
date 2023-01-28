import { Router } from "express";
import { format } from "morgan";
import {
  createCV,
  cvEstudy,
  createsCV,
  cvExperiences,
  cvRefer,
} from "../controllers/form.controller.js";

const router = Router();

router.get("/cv", createsCV);
router.post("/cv", createCV);
router.post("/cvEstudy", cvEstudy);
router.post("/cvExperiences", cvExperiences);
router.post("/cvRefer", cvRefer);
export default router;
