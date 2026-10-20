import Rating from "../models/ratingModel.js"

const addRating = async (req, res) => {

    let userId = req.user.id
    let counselorId = req.params.cnid

    const { rating, review } = req.body

    if (!rating || !review) {
        res.status(409)
        throw new Error("Please Fill All Details..")
    }

    // Check if rating exist

    let ratingExist = await Rating.findOne({ user: userId })

    if (ratingExist) {
        res.status(409)
        throw new Error("Already Rated!")
    }



    const newRating = new Rating({
        user: userId,
        counselor: counselorId,
        rating,
        review
    })

    await newRating.save()
    await newRating.populate('user')
    await newRating.populate('counselor')


    if (!newRating) {
        res.status(409)
        throw new Error("Rating Not Created!")
    }

    res.status(201).json(newRating)


}

const getRatings = async (req, res) => {

    const counselorId = req.params.cnid

    const ratings = await Rating.find({ counselor: counselorId }).populate('user').populate("counselor")

    if (!ratings) {
        res.status(404)
        throw new Error("Ratings Not Found!")
    }

    res.status(200).json(ratings)

}


const ratingController = { addRating, getRatings }

export default ratingController