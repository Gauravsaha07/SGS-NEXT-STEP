import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "SGS - Please Fill All Details"]
    }

})

const Category = mongoose.model("Category", categorySchema)

export default Category