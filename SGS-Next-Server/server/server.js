// import express from "express"
// import dotenv from "dotenv"
// dotenv.config()
// import colors from "colors"

// // Local Imports
// import connectDB from "./config/dbConfig.js"
// import authRoutes from "./routes/authRoutes.js"
// import adminRoutes from "./routes/adminRoutes.js"
// import counselorRoutes from "./routes/counselorRoutes.js"
// import ratingRoutes from "./routes/ratingsRoutes.js"
// import errorHandler from "./middleware/errorHandler.js"
// import creditRoutes from "./routes/creditRoutes.js"


// const PORT = process.env.PORT || 5000

// const app = express()

// // SGS DB CONNECTION
// connectDB()


// // Body-Parser
// app.use(express.json())
// app.use(express.urlencoded())

// app.get("/", (req, res) => {
//     res.status(200).json({
//         message: "WELCOME TO SGS NEXT STEP API 5.11"
//     })
// })


// // Auth Routes
// app.use("/api/auth", authRoutes)


// // Admin Routes
// app.use("/api/admin", adminRoutes)

// // Counselor Route
// app.use("/api/counselor", counselorRoutes)

// // Rating Routes
// app.use("/api/rating", ratingRoutes)

// // Credit Routes
// app.use("/api/credit", creditRoutes)

// // Error Handler
// app.use(errorHandler)

// app.listen(PORT, () => {
//     console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgGreen.black)
// })
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import http from "http"
import { Server } from "socket.io";
import socketAuthMiddleware from "./socket/socketAuth.js";
import { chatHandler } from "./socket/chatHandler.js"

// Local Imports
import connectDB from "./config/dbConfig.js"
import authRoutes from "./routes/authRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import counselorRoutes from "./routes/counselorRoutes.js"
import ratingRoutes from "./routes/ratingsRoutes.js"
import errorHandler from "./middleware/errorHandler.js"
import creditRoutes from "./routes/creditRoutes.js"
import aiRoutes from "./routes/roadmapRoutes.js"

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)

// DB CONNECTION
connectDB()


// Socket Config
const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true
    }
})

io.use(socketAuthMiddleware)

io.on("connection", (socket) => {
    console.log(`User connected : ${socket.userId}`)
    chatHandler(io, socket)
})


// Body-Parser
app.use(express.json())
app.use(express.urlencoded())



app.get("/", (req, res) => {
    res.status(200).json({
        message: "WELCOME TO NEXT STEP API 1.0"
    })
})


// Auth Routes
app.use("/api/auth", authRoutes)

// Admin Routes
app.use("/api/admin", adminRoutes)

// Counselor Route
app.use("/api/counselor", counselorRoutes)

// Rating Routes
app.use("/api/rating", ratingRoutes)

// Credit Routes
app.use("/api/credit", creditRoutes)

// A.I Routes
app.use("/api/ai", aiRoutes)

// Error Handler
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`.bgGreen.black)
})