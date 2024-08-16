import mongoose from "mongoose";

const connection =()=>{
    try {
        mongoose.connect("mongodb+srv://pavanvvp123:EsF3kKvSVtHletKo@jobs.hoz6a.mongodb.net/?retryWrites=true&w=majority&appName=jobs")
        console.log("db connected successfully");
        
    } catch (error) {
        console.log(error.message);
    }
}

export default connection