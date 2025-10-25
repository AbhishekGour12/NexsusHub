import { Request, Response } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';



const Signup = async(req: Request, res: Response) =>{
    const {name, email, password, type} = req.body;
    console.log(req.body)

    try{
        if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide fullname, email, and password' });
    }
    const existingUser = await User.findOne({where: {email: email}});
    
    if(existingUser){
        return res.status(409).json({message: 'User already exists'})

        
    }
    const hashPassword =   await bcrypt.hash(password, 10);
    console.log(hashPassword)
    const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        type
    })

    return res.status(201).json({message: "User registered successfully"});


    }catch(err: any){
        console.log(err.message)
        return res.status(500).json({message: 'Internal server error'})
    }

}

const Login = async(req: Request, res: Response) =>{
    const {email, password} = req.body;
    
    try{
        if(!email || !password){
            return res.status(400).json({message: 'Please provide email and password'});
        }
        const user = await User.findOne({where: {email: email}}) as any;
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        // User model type may not expose .password in TypeScript definitions,
        // so cast to any (or use user.getDataValue('password') if available on your model)
        const isMatch = await bcrypt.compare(password, (user as any).password);
        if(!isMatch){
            return res.status(401).json({message: 'Invalid email or password'});
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET as string || "123456", {expiresIn: '1h'}  ,)
        return res.status(200).json({message: 'Login successful', token: token});
    }catch(err: any){
        console.log(err.message)
        return res.status(500).json({message: 'Internal server error'})
    }
}

const getUser = async(req: Request, res: Response) =>{
    const {id} = req.params;
    try{
        const user = await User.findOne({where: {id: id}});
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json(user);
    }catch(err: any){
        console.log(err.message)
        return res.status(500).json({message: 'Internal server error'})
    }
}

const updateUser = async(req: Request, res: Response) =>{
    const {id} = req.params;
    const {name, email, password, type} = req.body;
    try{
        const user = await User.findOne({where: {id: id}});
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        const updatedUser = await User.update({
            name,
            email,
            password,
            type
        }, {where: {id: id}});
        return res.status(200).json({message: 'User updated successfully'});
    }catch(err: any){
        console.log(err.message)
        return res.status(500).json({message: 'Internal server error'})
    }
}

const deleteUser = async(req: Request, res: Response) =>{
    const {id} = req.params;
    try{
        const user = await User.findOne({where: {id: id}});
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        await User.destroy({where: {id: id}});
        return res.status(200).json({message: 'User deleted successfully'});
    }catch(err: any){
        console.log(err.message)
        return res.status(500).json({message: 'Internal server error'})
    }
}

export {Signup, Login, getUser, updateUser, deleteUser};