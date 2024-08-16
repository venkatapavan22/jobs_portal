
import jobsModel from "../models/jobs.js"


export const jobsRegister= async(req,res)=>{
    const{jobtitle,company,logo,skills,location,experience,salary,resume,description}=req.body     
    try {
        const jobsregister= new jobsModel({
            jobtitle,company,logo,skills,location,experience,salary,resume,description
        })
        await jobsregister.save()
        res.status(200).json({message:"job posted successfully",jobsregister})
    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}

export const getJobs= async (req,res)=>{
    try {
        const getallJobs=await jobsModel.find()
        res.status(200).json({getallJobs})

    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}

export const deleteJob=async(req,res)=>{
    const {id}=req.params
    try {
        const deletejob=await jobsModel.findByIdAndDelete(id)
        res.status(200).json({message:"job deleted successfully"})

    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}

export const getjob=async(req,res)=>{
    const {id}=req.params
    try {
        const getJob=await jobsModel.findById(id)
        res.status(200).json(getJob)
    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}
