import express from "express"
import adminController from '../controllers/adminController.js'
import protect from "../middleware/authMiddleware.js"

const router = express.Router()

router.get ("/users" , protect.forAdmin , adminController.getUsers)
router.get("/category" , protect.forAdmin , adminController.getCategories )
router.post("/category" , protect.forAdmin , adminController.createCategory )
router.post("/career/:cid" , protect.forAdmin , adminController.createCareer )
router.get("/career" , protect.forAdmin , adminController.getCreers )
router.get("/counselors" , protect.forAdmin , adminController.getCounselors )
router.put("/counselors/:cnid" , protect.forAdmin , adminController.updateCounselor )

export default router
