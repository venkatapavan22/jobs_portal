import jwt from "jsonwebtoken";
import userModel from "../models/user.js";
import bcrypt from "bcryptjs";
export const userRegister = async(req,res) => {
    const {firstname,lastname,email,password,phone} = req.body;
    try {
        const user = await userModel.findOne({email})
        if(user){
            res.status(401).json({message:'email already exist'})
        }
        const hashedPass = await bcrypt.hash(password, 12);
        const newUser = new userModel({
            firstname,
            lastname,
            email,
            password: hashedPass,
            phone
        })
        await newUser.save();
        res.status(200).json({message:'user registered successfully', newUser})
    } catch (error) {
        return res.status(500).json(error.message);
    }
}


export const userLogin= async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await userModel.findOne({email})
        if(!user){
            res.status(400).json({message:"Invalid Email"})
        }
        const correctPass=await bcrypt.compare(password,user.password)
        if(!correctPass){
            res.status(400).json({message:"wrong password"})
        }
        const jwt_token=jwt.sign({useremail:user.email},"djadja",{expiresIn:"10d"})
        res.status(200).json({message:"user login successful",jwt_token})
    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}


export const getUsers= async (req,res)=>{
    try { 
        const allusers=await userModel.find();
        res.status(200).json({message:"users",user:allusers})
    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}

export const getUserById= async(req,res)=>{
    const {id} = req.params
    try {
        const getSpecificUser=await userModel.findById(id)
        res.status(200).json(getSpecificUser)
        
    } catch (error) {
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}

export const deleteUser = async (req,res)=>{
    const {id}=req.params
    try{
        const deleteUserById=await userModel.findByIdAndDelete(id)
        res.status(200).json({message:"user deleted successfully",deleteUserById})
    }catch(error){
        res.status(500).json({mesage:"something went wrong", error:error.message})
    }
}
   