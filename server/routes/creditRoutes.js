import express from "express"
import protect from "../middleware/authMiddleware.js"
import creditController from "../controllers/creditController.js"

const router = express.Router()


router.get("/", protect.forUser, creditController.getAllCreditHistory)
router.post("/", protect.forUser, creditController.requestCredit)
router.get("/:rid", protect.forUser, creditController.getCreditRequest)


export default router