import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import fs from "node:fs"
import uploadToCloudinary from "../middleware/cloudinaryMiddleware.js"

const registerUser = async (req, res) => {

    const { name, email, phone, password, qualification, location } = req.body


    if (!name || !email || !phone || !password || !qualification || !location) {
        res.status(409)
        throw new Error("SGS - Please Fill All Details!")
    }

    // Check If Phone = 10
    if (phone.length != 10) {
        res.status(409)
        throw new Error('SGS - Invalid Phone Number')
    }

    let emailExist = await User.findOne({ email: email })
    let phoneExist = await User.findOne({ phone: phone })

    if (emailExist || phoneExist) {
        res.status(409)
        throw new Error('SGS - User Already Exist')
    }

    // Hash Password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt); 

    // Upload To Cloudinary
    let uploadResult = await uploadToCloudinary(req.file.path)

    // Remove From Server
    fs.unlinkSync(req.file.path)

    const user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword,
        qualification,
        location,
        profilePic : uploadResult.secure_url
    })

    if (!user) {
        res.status(409)
        throw new Error('SGS - User Not Created!')
    }

    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        userType: user.userType,
        location: user.location,
        qualification: user.qualification,
        credits: user.credits,
        isActive: user.isActive,
        userSince: user.createdAt,
        profilePic : user.profilePic,
        token: generateToken(user._id)
    })
}

const loginUser = async (req, res) => { 

    const { email, password } = req.body

    if (!email || !password) {

        res.status(409)

        throw new Error('SGS - Please Fill All Details!')

    }

    const user = await User.findOne({ email })

    if (user && bcrypt.compareSync(password, user.password)) {

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            userType: user.userType,
            location: user.location,
            qualification: user.qualification,
            credits: user.credits,
            isActive: user.isActive,
            userSince: user.createdAt,
            token: generateToken(user._id)
        })


    }
    else {
        res.status(401)
        throw new Error('SGS - Invalid Credentials')
    }
}


const privateController = async (req, res) => {
    res.json({
        message: "SGS - Request Made By : " + req.user.name
    })
}


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

const authController = {
    registerUser,
    loginUser,
    privateController
}

export default authController
