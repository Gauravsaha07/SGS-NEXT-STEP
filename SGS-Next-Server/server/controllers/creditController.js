import Credit from "../models/creditModel.js"

const requestCredit = async (req, res) => {

    let userId = req.user.id

    const { credits } = req.body

    if (!credits) {
        res.status(409)
        throw new Error("Please Add Credit Amount")
    }

    const creditRequest = new Credit({
        user: userId,
        credits: credits,
        status: "pending"
    })

    await creditRequest.save()
    await creditRequest.populate('user')

    if (!creditRequest) {
        res.status(409)
        throw new Error("Credit Not Raised")
    }

    res.status(201).json(creditRequest)

}



const getCreditRequest = async (req, res) => {

    const creditRequest = await Credit.findById(req.params.rid).populate('user')

    if (!creditRequest) {
        res.status(404)
        throw new Error("Not Credit Request Found")
    }

    res.status(200).json(creditRequest)


}



const getAllCreditHistory = async (req, res) => {
    const creditRequests = await Credit.find({ user: req.user.id }).populate('user')

    if (!creditRequests) {
        res.status(404)
        throw new Error("Not Credit Requests Found")
    }

    res.status(200).json(creditRequests)

}


const creditController = { requestCredit, getCreditRequest, getAllCreditHistory }

export default creditController