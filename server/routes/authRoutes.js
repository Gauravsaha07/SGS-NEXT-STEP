import express from "express"
import authController from "../controllers/authController.js"
import protect from "../middleware/authMiddleware.js"
import upload from "../middleware/fileUploadMiddleware.js"


const router = express.Router()


router.post("/register", upload.single("profile_image"), authController.registerUser)
router.post("/login", authController.loginUser)
router.post("/private", protect.forUser, authController.privateController)


export default router