import express from 'express'
import { deleteUser, getUserById, getUsers, userRegister } from '../controllers/userController.js';
import { userLogin } from '../controllers/userController.js';

const router = express.Router();

router.post('/register',userRegister)
router.post("/login",userLogin)
router.get("/users",getUsers)
router.get("/userbyid/:id",getUserById)
router.delete("/deleteuser/:id",deleteUser)

export default router;