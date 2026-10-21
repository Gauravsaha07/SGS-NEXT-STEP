import express from "express"
import protect from "../middleware/authMiddleware.js"
import ratingController from "../controllers/ratingController.js"

const router = express.Router()


router.get("/:cnid", protect.forUser, ratingController.getRatings)
router.post("/:cnid", protect.forUser, ratingController.addRating)


export default router