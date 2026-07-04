import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type : String,
        required : [true , "Please Fill Name!"]
    },
    email: {
        type : String,
        unique : true,
        required : [true , "Please Fill E-mail!"]
    },
    phone: {
        type : String,
        unique : true,
        required : [true , "Please Fill Phone Number!"]
    },
    password: {
        type : String,
        required : [true , "Please Fill Password!"]
    },
    userType: {
        type : String,
        require : true,
        enum : ["STUDENT" , "COUNSELOR" , "ADMIN"],
        default : "STUDENT"
    },
    isActive: {
        type : Boolean,
        required : true,
        default : true
    },
    qualification: {
        type : String,
        required : [true , "Please Fill Qualification!"]
    },
    location: {
        type : String,
        required : [true , "Please Fill Location!"]
    },
    credits: {
        type : Number,
        default : 5,
        required : true
    }

}, {
    timestamps: true
})

const User = mongoose.model("User" , userSchema)

export default User
