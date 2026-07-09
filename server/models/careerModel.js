import mongoose from "mongoose"

const careerSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    title: {
        type: String,
        required: [true, "SGS - Please Fill Career Title!"]
    },
    description: {
        type: String,
        required: [true, "SGS - Please Fill Description!"]
    },
    requiredQualification: {
        type: String,
        required: [true, "SGS - Please Fill Required Qualification!"]
    },
    duration: {
        type: String,
        required: [true, "SGS - Please Fill Duration!"]
    },
    salary: {
        type: String,
        required: [true, "SGS - Please Fill Up Salary!"]
    }
})

const Career = mongoose.model("Career" , careerSchema)

export default Career
