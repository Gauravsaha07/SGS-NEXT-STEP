import Category from "../models/cetegoryModel.js"
import Counselor from "../models/counselorModel.js"

const becomeCounselor = async(req , res) => {

    let userId = req.user.id

    const{category , experience} = req.body

    if(!category || !experience) {
        res.status(409)
        throw new Error('SGS - Please Fill All Details')
    }


// Check If Category Exist
const categoryExist = await Category.findById(category)

if(!categoryExist) {
    res.status(404)
    throw new Error("Category Not Found!")
}
    

// Check If Experience Is 2 Or 2+

    if(experience < 2) {
        res.status(409)
        throw new Error("SGS - Experience Must Be 2 Or 2+")
    }

    let counselor = await Counselor.create({
        user : userId,
        category,
        experience
    })

    if(!counselor) {
        res.status(409)
        throw new Error("SGS - Counselor Not Created!")
    }

    res.status(201).json ({
        message : "SGS - Counselor Request Raised , Wait For Admin Approval",
        counselor : counselor
    })

}


const counselorController = { becomeCounselor }

export default counselorController
