import express from "express"
import dotenv from "dotenv"
dotenv.config()
import colors from "colors"

// Local Imports
import connectDB from "./config/dbConfig.js"
import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import counselorRoutes from "./routes/counselorRoutes.js"
import ratingRoutes from "./routes/ratingsRoutes.js"
import errorHandler from "./middleware/errorHandler.js"


const PORT = process.env.PORT || 5000

const app = express()

// SGS DB CONNECTION
connectDB()


// Body-Parser
app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "WELCOME TO SGS NEXT STEP API 5.11"
    })
})


// Auth Routes
app.use("/api/auth", authRoutes)


// Admin Routes
app.use("/api/admin" , adminRoutes)

// Counselor Route
app.use("/api/counselor" , counselorRoutes)


app.use("/api/rating" , ratingRoutes)


// Error Handler
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgGreen.black)
}) 