import express from 'express'
import {Login, getUser, deleteUser, Signup, updateUser } from '../controllers/UserController.js';
import { loginUserValidator, registerUserValidator } from '../validators/userValidator.js';
import { validateRequest } from '../middleware/validatesRequest.js';

const router = express.Router();


router.post('/register',  registerUserValidator, validateRequest, Signup);
router.post('/login', loginUserValidator, validateRequest, Login);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router
