import mongoose from "mongoose";

const applicationSchema=mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userModel',
        required: true
    },
    jobs:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobsModel',
        required: true
    },
    resume:{
        type:String,
        required: true
    }
})

const applicationModel=mongoose.model("applications",applicationSchema)

export default applicationModel