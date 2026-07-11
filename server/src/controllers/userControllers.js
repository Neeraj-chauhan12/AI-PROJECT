const User=require("../models/userModel");
const bcrypt=require("bcryptjs");
//register controller
exports.registerUser =async(req,res)=>{

    const {username,email,password}=req.body;

    const existUser=await User.findOne({email});

    if(existUser){
        return res.status(400).json({
            message:"User already exist"
        })
    }

    const hashPassword=await bcrypt.hash(password,10);
    const user=new User({username,email,password:hashPassword});
    await user.save();
    res.status(201).json({
        message:"User created Successfully",
        user
    })

}

//login controllers
exports.LoginUser=(req,res)=>{

    const {email, password}=req.body;

}


//logout controllers
exports.logoutUser=(req,res)=>{}