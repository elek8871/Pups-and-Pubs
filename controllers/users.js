const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")

// GET /users/new -> renders form to create a new user
router.get("/new", (req, res)=>{
    // res.send('show a new user form')
    res.render("users/new.ejs")
  
})

// POST /users -> create a new user in the db
router.post("/", async (req, res)=>{
    // console.log(req.body)
    // res.send('create a new user in db')
    try{
         // create a new user
         // hash the supplied password from the req.body
         const hashedPassword = bcrypt.hashSync(req.body.password, 12)
        //  create new user
         const [newUser, created]  = await db.user.findOrCreate({
            where:{
                email: req.body.email,
            },
           defaults:{
            password: hashedPassword
        }
         })
// if user found send to log in form
         if(!created){
            console.log("user exists already")
            res.redirect("/users/login?message=Please log into your account to continue")
         }else{
          // store as cookie in browser
        const encryptedUserId = crypto.AES.encrypt(newUser.id.toString(), process.env.ENC_SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie("userId", encryptedUserIdString)
        // redirect to the home page
        res.redirect("/users/profile")
        // res.redirect("/")
         }
    }catch(err){
        console.log(err)
        res.send("server error")
    } 
})

// LOGGING IN
//  GET /users/login -> show a login form to user
router.get("/login", (req, res)=>{
    // res.send("show log in form")
    res.render("users/login.ejs",{
        // if msg exists pass it in as msg
        message: req.query.message ? req.query.message :null
    })
})

//  POST /users/login -> accept a payload of form data and use it to log user in
router.post("/login", async (req, res)=>{
    // res.send("log in user")
    // console.log(req.body)
    try{
        // look user in db via their email
        const user = await db.user.findOne({
            where: {
                email: req.body.email
            }
        })
        const noLoginMessage = "Incorrect user name or password"
            // iif user not found send back to login form
        if (!user) {
            console.log ("user not found")
            res.redirect ("/users/login?message=" + noLoginMessage)
            // if found but entered wrong password send back to login from
        } else if  (!bcrypt.compareSync(req.body.password, user.password)){
            console.log ("wrong password")
            res.redirect ("/users/login?message=" + noLoginMessage)
        } else {
             // if user found & pw match what is stored in dbthen log in user
        
         console.log("log in the user")
         const encryptedUserId = crypto.AES.encrypt(user.id.toString(), process.env.ENC_SECRET)
         const encryptedUserIdString = encryptedUserId.toString()
         res.cookie("userId", encryptedUserIdString)
         res.redirect("/users/profile")
        }

        }catch(err){
            console.log(err)
            res.send('server error')
    }
})
// GET/users/logout -> log out a user by clearing stored cookie
router.get("/logout", (req, res)=>{
    // res.send("log user out")
    // clear userid cookie
    res.clearCookie("userId")
    // redirect to home page
    res.redirect("/")
})

router.get("/profile", (req, res)=>{
    // if user not logged in: redirect to login
    if (!res.locals.user){
        res.redirect("/users/login?message= You must authenticate before you are authorized to view this log in form")
    } else {
          // otherwise show them their profile
        res.render("users/profile.ejs", {
            user: res.locals.user
        })
    }
  
  
})




module.exports = router