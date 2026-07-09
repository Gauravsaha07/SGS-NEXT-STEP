import mongoose from "mongoose";

const counselorSchema = new mongoose.Schema({

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false,
        req: true
    },
    isAvailable: {
        type: Boolean,
        default: true,
        req: true
    },
    status : {
        type : String,
        enum : ["accepted" , "pending" , "rejected"],
        default : "pending"
    }

}, {
    timestamps: true
})


const Counselor = mongoose.model("Counselor" , counselorSchema)

export default Counselor