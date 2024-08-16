import express from 'express'
import { createApplication, getApplcationByJob, getApplications, getApplicationsByUser } from '../controllers/applicationController.js'
import multer from 'multer';
import path from 'path';
const router=express.Router()
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});
const upload = multer({ storage });
router.post("/create",upload.single('file'),createApplication)
router.get("/get",getApplications)
router.get('/get/:id',getApplicationsByUser)
router.get("/getApplicants/:id",getApplcationByJob)
export default router;