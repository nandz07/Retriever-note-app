const asyncHandler=require('express-async-handler')
const User=require('../models/userModels');
const generateToken = require('../utils/generateToken');



const registerUser=async(req,res)=>{
    try {
        const {name,email,password,pic}=req.body;
        const userExists=await User.findOne({email})

        if(userExists){
            res.status(400)
            throw new Error("User Already Exists")
        }

        const user=await User.create({
            name,email,password,pic
        })
        if(user){
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                pic:user.pic,
                token:generateToken(user._id)
            })
        }else{
            res.status(404)
            throw new Error("Error Occured !")
        }
    
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
            // throw new Error("Error Occured !")
    }
    
}
const authUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(user && (await user.matchPassword(password))){
            res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                pic:user.pic,
                token:generateToken(user._id),
            })
        }else{
            res.status(404)
            throw new Error("Invalid Email or Password!")
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error });
    }
}

module.exports ={registerUser,authUser}