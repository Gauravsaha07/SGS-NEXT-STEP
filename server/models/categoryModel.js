import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please Enter Category Title!"]
    }

}, {
    timestamps: true
})


const Category = mongoose.model("Category", categorySchema)

export default Category