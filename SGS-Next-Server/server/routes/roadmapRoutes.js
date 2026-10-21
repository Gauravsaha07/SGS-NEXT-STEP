import express from "express"
import { generateRoadmap } from "../controllers/roadmapController.js"
import protect from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/roadmap", protect.forUser, generateRoadmap)


export default router