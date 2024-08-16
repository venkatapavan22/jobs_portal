import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    appplications:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'applicationModel',
        required: true
    }

})

const userModel=mongoose.model("userModel",userSchema);
export default userModel;