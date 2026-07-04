import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

const protect = async (req, res, next) => {
    let token
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1]
            let decoded = jwt.verify(token, process.env.JWT_SECRET)
            let user = await User.findById(decoded.id).select("-password")
            req.user = user
            next()
        } else {
            res.status(401)
            throw new Error('SGS - Unauthorised Access')
        }
    } catch (error) {
        res.status(401)
        throw new Error('SGS - Unauthorised Access')
    }
}

export default protect
