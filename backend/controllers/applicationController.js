
import applicationModel from "../models/application.js"

export const createApplication=async(req,res)=>{
    const {user,jobs}=req.body
    try {
        const existingApplication = await applicationModel.findOne({
            user,
            jobs: { $in: jobs },
        });
        if(existingApplication){
            res.status(401).json({message:"Already Applied"})
        }
        const file = req.file ? req.file.filename : undefined;
        if(file){
            applicationModel.resume = file;
        }
        const application= new applicationModel({
            user,
            jobs,
            resume:file
        })
        await application.save();
        res.status(201).json({message:"Applied Sucesfully",application})
    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}

export const getApplications= async (req,res)=>{
    try {
        const getApplication=await applicationModel.find({})
        res.status(200).json(getApplication)
    } catch (error){
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}

export const getApplicationsByUser = async(req,res) => {
    const {id}= req.params
    try {
        const applications = await applicationModel.findOne({user:id}).populate('jobs').populate('resume')
        if(!applications){
            res.status(401).json({message:"User not found"})
        }
        res.status(200).json(applications)
    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}


export const getApplcationByJob = async (req,res)=>{
    const {id}=req.params
    try {
        const applicants=await applicationModel.findOne({jobs: id}).populate("user").populate('resume')
        if(!applicants){
            res.status(401).json({message:"job not found"})
        }
        res.status(200).json(applicants)

    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}