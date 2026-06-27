const user = require('../models/usermodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// user registration

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existuser = await user.findOne({ email });
        if (existuser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const newUser = new user({
            username,
            email,
            password
        });

        const hashedpassword = await bcrypt.hash(password, 10);
        newUser.password = hashedpassword;

        const savedUser = await newUser.save();
        res.status(201).json({
            message: "User registered successfully",
            savedUser
        })
    } catch (err) {
        res.status(500).json({
            message: "Failed to register user",
            error: err.message
        });
    }
};




// user login

const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existuser = await user.findOne({ email });
        if (!existuser) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        const isPasswordValid = await bcrypt.compare(password, existuser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid   password"
            });
        }

        const token = jwt.sign(
            { userId: existuser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            message: "User logged in successfully",
            token,
            user
        });
    } catch (err) {
        res.status(500).json({
            message: "Failed to login user",
            error: err.message
        });
    }
};

module.exports = {
    registerUser,
    loginuser
};
