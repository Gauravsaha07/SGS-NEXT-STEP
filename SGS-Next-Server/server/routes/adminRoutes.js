import express from "express"
import adminController from "../controllers/adminController.js"
import protect from "../middleware/authMiddleware.js"
import { adminAiChat } from "../controllers/roadmapController.js"

const router = express.Router()

router.get("/users", protect.forAdmin, adminController.getUsers)
router.get("/category", protect.forAdmin, adminController.getCategories)
router.post("/category", protect.forAdmin, adminController.createCategory)
router.post("/career/:cid", protect.forAdmin, adminController.createCareer)
router.get("/career", protect.forAdmin, adminController.getCareers)
router.get("/counselors", protect.forAdmin, adminController.getCounselors)
router.put("/counselors/:cnid", protect.forAdmin, adminController.updateCounselor)
router.get("/credits", protect.forAdmin, adminController.getAllCreditRequests)
router.put("/credits/:rid", protect.forAdmin, adminController.updateCredit)
router.get("/roadmaps", protect.forAdmin, adminController.getAllRoadmaps)
router.put("/:uid", protect.forAdmin, adminController.updateUser)
router.post("/ai", protect.forAdmin, adminAiChat)

export default router