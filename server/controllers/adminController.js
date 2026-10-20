import Career from "../models/careerModel.js"
import Category from "../models/categoryModel.js"
import Counselor from "../models/counselorModel.js"
import Credit from "../models/creditModel.js"
import Roadmap from "../models/roadmapModel.js"
import User from "../models/userModel.js"

const getUsers = async (req, res) => {

    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error("No Users Found!")
    }

    res.status(201).json(users)

}


const createCategory = async (req, res) => {

    if (!req.body.title) {
        res.status(409)
        throw new Error("Please Enter Category Title")
    }

    const category = await Category.create({ title: req.body.title })

    if (!category) {
        res.status(409)
        throw new Error("Category not created!")
    }

    res.status(201).json(category)

}

const getCategories = async (req, res) => {



    const categories = await Category.find()

    if (!categories) {
        res.status(404)
        throw new Error("Categories not found!")
    }

    res.status(200).json(categories)

}


const createCareer = async (req, res) => {

    const { title, description, requiredQualification, duration, salary } = req.body

    if (!title || !description || !requiredQualification || !duration || !salary) {
        res.status(409)
        throw new Error("Please Fill All Details!")
    }

    const categoryId = req.params.cid

    const career = await Career.create({
        category: categoryId,
        title,
        description,
        requiredQualification,
        duration,
        salary
    })


    if (!career) {
        res.status(409)
        throw new Error("Career Not Created!")
    }

    res.status(201).json(career)


}

const getCareers = async (req, res) => {
    const careers = await Career.find().populate('category')

    if (!careers) {
        res.status(404)
        throw new Error("No Carrers Found")
    }

    res.status(200).json(careers)

}


const getCounselors = async (req, res) => {
    const counselors = await Counselor.find().populate('category').populate('user')

    if (!counselors) {
        res.status(404)
        throw new Error("Counselors Not Found!")
    }


    res.status(200).json(counselors)

}


const updateCounselor = async (req, res) => {

    const counselor = await Counselor.findById(req.params.cnid)

    if (!counselor) {
        res.status(404)
        throw new Error('Counselor Not Found')
    }

    const updatedCounselor = await Counselor.findByIdAndUpdate(counselor._id, req.body, { new: true }).populate('user').populate('category')

    if (req.body.status === "accepted") {
        const updatedUser = await User.findByIdAndUpdate(counselor.user, { userType: "COUNSELOR" }, { new: true })
    }

    if (!updatedCounselor) {
        res.status(409)
        throw new Error("Counselor not updated")
    }

    res.status(200).json(updatedCounselor)

}

const getAllCreditRequests = async (req, res) => {

    const creditsRequests = await Credit.find().populate('user')

    if (!creditsRequests) {
        res.status(404)
        throw new Error("No Credits Requests Found")
    }

    res.status(200).json(creditsRequests)

}

const updateCredit = async (req, res) => {

    const { status } = req.body

    if (!status) {
        res.status(409)
        throw new Error("Please send status")
    }

    const creditRequest = await Credit.findById(req.params.rid)



    if (!creditRequest) {
        res.status(404)
        throw new Error("Credit Request Not Found!")
    }

    // Update Credits For User
    const user = await User.findById(creditRequest.user)


    if (!user) {
        res.status(404)
        throw new Error("No User Found!")
    }



    if (status === "granted") {
        const updatedUser = await User.findByIdAndUpdate(user._id, { credits: user.credits + creditRequest.credits }, { new: true })
    }

    // Update Status
    const updatedCreditRequest = await Credit.findByIdAndUpdate(creditRequest._id, { status }, { new: true })



    res.status(200).json(updatedCreditRequest)


}


const getAllRoadmaps = async (req, res) => {
    const roadmaps = await Roadmap.find().populate('user')

    if (!roadmaps) {
        res.status(404)
        throw new Error("Roadmaps Not Found")
    }

    res.status(200).json(roadmaps)


}

const updateUser = async (req, res) => {

    const userId = req.params.uid

    const user = await User.findById(userId)

    if (!user) {
        res.status(404)
        throw new Error("User Not Exist")
    }

    const updatedUser = await User.findByIdAndUpdate(user._id, { isActive: !user.isActive }, { new: true })

    if (!updateUser) {
        res.status(409)
        throw new Error("User Not Updated!")
    }
    res.status(200).json(updatedUser)
}



const adminController = { getUsers, createCategory, getCategories, createCareer, getCareers, getCounselors, updateCounselor, getAllCreditRequests, updateCredit, getAllRoadmaps, updateUser }

export default adminController