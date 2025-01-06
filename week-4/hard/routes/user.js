const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const User = require("../database/index")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {email, password} = req.body;

    try{
        const userAlreadyPresent  = await User.findOne({email})
        if(userAlreadyPresent){
            res.status(409).json({
                message: "User with this email already exists"
            })
        }
        const hashpwd = await bcrypt.hash(password,12);
        await User.create({email, password: hashpwd})

        res.status(201).json({
            message: "You rae signed up successfully"
        })
    }catch(err){
        res.status(500).json({
            message: "Error while signing up"
        })
    }
});

router.post('/login', async(req, res) => {
     // Implement user login logic
     const {email, password} = req.body;

     try{
        const user = await User.findOne({email});

        if(!user){
            res.status(404).json({
                message: "User not found, Please signup first"
            })
        }

        const pwdCheck = await bcrypt.compare(password,this.user.password);

        if(!pwdCheck){
            res.status(403).json({
                message: "Incorrect password"
            })
        }

        const token = jwt.sign({id: user._id},process.env.SECRET)

        res.json({
            message: "Logged in successfully", token
        })
     }catch(err){
        res.status(500).json({
            message: "Error while logging in"
        })

     }
});

router.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = router