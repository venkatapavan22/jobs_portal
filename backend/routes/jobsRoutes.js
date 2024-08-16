import express from 'express'
import { deleteJob, getjob, getJobs, jobsRegister } from '../controllers/jobsController.js'

const router=express.Router()

router.post("/register",jobsRegister)
router.get("/getjobs",getJobs)
router.get("/getjob/:id",getjob)
router.delete("/deletejob/:id",deleteJob)

export default router;