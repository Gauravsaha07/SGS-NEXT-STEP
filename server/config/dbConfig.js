import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI)
        console.log(`SGS DB CONNECTION SUCCESS  ${conn.connection.name}`)
    } catch (error) {
        console.log(`SGS DB CONNECTION FAILED ${error.message}`)
    }
}

export default connectDB
