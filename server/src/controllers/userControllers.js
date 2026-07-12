const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//register controller
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashPassword });
    await user.save();
    res.status(201).json({
      message: "User created Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong in register",
    });
  }
};

//login controllers
exports.LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }

    const isMatch = await bcrypt.compare(password, existUser.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Password does not match",
      });
    }

    //generate token
    const token = jwt.sign(
      { email: existUser.email },
      process.env.JWT_SECRET_KEY,
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      message: "User logged in Successfully",
      existUser,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong in login",
    });
  }
};

//logout controllers
exports.logoutUser = (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 0,
  });
  res.status(200).json({
    message: "User logged out Successfully",
  });
};
