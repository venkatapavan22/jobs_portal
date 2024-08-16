
import mongoose from "mongoose";

const jobSchema=mongoose.Schema({
    jobtitle:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    experience:{
        type:[String],
        enum:["fresher","mid-level","experienced"],
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const jobsModel=mongoose.model("jobsModel",jobSchema)

export default jobsModel