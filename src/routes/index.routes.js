import { Router } from "express";
import { inicio, ping, viewCV, viewsCV } from "../controllers/index.controller.js";


const router = Router();

router.get("/", inicio)
router.get("/ping", ping)
router.get("/wiewCV", viewsCV)
router.get("/wiewCV/:id", viewCV)

export default router