//importing all the modules
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/User')

//crating the app 
const app = express()
//using it 
app.use(express.json())  //transfering the data form frontend to backend in jason format
app.use(cors({  
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())

//connecting the mongodb , by passing url 
mongoose.connect('mongodb://127.0.0.1:27017/employee');

const varifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json("Token is missing")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err) {
                return res.json("Error with token")
            } else {
                if(decoded.role === "admin") {
                    next()
                } else {
                    return res.json("not admin")
                }
            }
        })
    }
}

app.get('/dashboard',varifyUser ,(req, res) => {
    res.json("Success")
})

//creating the register api
app.post('/register', (req, res) => {
    //pitch the data from database , for this i need to create model also for user
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        //using the userModel 
        UserModel.create({name, email, password: hash})
        .then(user => res.json("Success"))
        //if there is any error
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

//this is the login api
app.post('/login', (req, res) => {
    //get email,password from req.body
    const {email, password} = req.body;
    //from UserModel
    UserModel.findOne({email: email})
    .then(user => {
        if(user) { //if user is correct 
            bcrypt.compare(password, user.password, (err, response) => {
                //checking email,password and role 
                if(response) {
                  const token = jwt.sign({email: user.email, role: user.role},
                        //secret-key expires in 1 day
                        "jwt-secret-key", {expiresIn: '1d'}) 
                    //generate token if it is correct and status will be success 
                    res.cookie('token', token)
                    return res.json({Status: "Success", role: user.role})
                }else { //if the password is incorrect 
                    return res.json("The password is incorrect")
                }
            })
        } else { // if user is not available 
            return res.json("No record existed")
        }
    })
})

//initilizing the app is listening in to the which port
app.listen(3001, () => {
    console.log("Server is Running")
})