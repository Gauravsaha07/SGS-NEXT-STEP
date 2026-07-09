import express from "express"
import counselorController from "../controllers/counselorController.js"
import protect from "../middleware/authMiddleware.js"


const router = express.Router()


router.post("/" , protect.forUser , counselorController.becomeCounselor)


export default router