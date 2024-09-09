import { User } from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { generateTokenAndSetCookie } from "../utils/generateToken.js"
export async function signup(req, res) {
    
    try {
        const { email, password, username } = req.body
        if (!email || !password || !username) {

            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: "Invalid email" })

        }
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" })
        }
        const existingUserByEmail = await User.findOne({ email: email })

        if (existingUserByEmail) {
            return res.status(400).json({ success: false, message: "Email already exist" })
        }
        const existingUserByUsername = await User.findOne({ username: username })
        if (existingUserByUsername) {
            return res.status(400).json({ success: false, message: "Username already exist" })
        }

        const salt = await bcryptjs.genSalt(10)
        
        const hashedPassword = await bcryptjs.hash(password, salt)

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png	", "/avatar3.png"]


        const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)]
        const newUser = new User({
            email,
            password: hashedPassword,
            username,
            image
        })

        //generate token and set cookie
        generateTokenAndSetCookie(newUser._id, res)
        await newUser.save()
        //remove password from response

        res.status(201).json({
            success: true,
            user:
            {
                ...newUser._doc,
                password: ""
            }
        })



    } catch (error) {

        console.log("Error in sign in", error.message)
        res.status(500).json({ success: false, message: "SIGN IN wala Error wala Internal server error" })
    }

}
export async function login(req, res) {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" })
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid Email or Password" })
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: "Invalid Email or Password" })
        }
        generateTokenAndSetCookie(user.id, res)
        res.status(200).json({
            success: true,
            user: {
                ...user._doc,
                password: ""
            }
        })

    } catch (error) {

        console.log("Error in login", error.message)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}
export async function logout(req, res) {

    try {
        res.clearCookie("jwt-netflix")
        res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        console.log("ERROR in logout Controller", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export async function authCheck(req, res) {

    try {
        res.status(200).json({ success: true, user: req.user });
    } catch (error) {
        console.log("error in authcheck", error.message);
        res.status(500).json({ success: false, message: "Internal server error" });	
    }

}