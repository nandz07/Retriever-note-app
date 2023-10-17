const asyncHandler=require('express-async-handler')
const User=require('../models/userModels')



const registerUser=async(req,res)=>{
    try {
        const {name,email,password,pic}=req.body;
    res.json({
        name,
        email
    })
    } catch (error) {
        console.log(error);
    }
    
}

module.exports ={registerUser}