// req packages
require("dotenv").config()
const express = require("express")
const ejsLayouts = require("express-ejs-layouts")
const cookieParser = require("cookie-parser")
const db = require("./models")
const crypto = require("crypto-js")
const axios = require('axios')
const methodOverride = require('method-override')

// config express/app middlewares
const app = express()
const PORT = process.env.port || 3000
app.set("view engine", "ejs")
app.use(ejsLayouts)
app.use(express.urlencoded ({extended: false}))
app.use(cookieParser())
app.use(methodOverride("_method"))
app.use(express.static("public"))
// custom middleware for cookies
app.use(async (req, res, next) =>{
    // console.log("hello from mw 🐸")
    // if there is a cookie on incoming req
    if(req.cookies.userId){
        // decyrpt user id before we look up user id
        const decyrptedId = crypto.AES.decrypt(req.cookies.userId.toString(), process.env.ENC_SECRET)
        const decyrptedIdString= decyrptedId.toString(crypto.enc.Utf8)
        // look up userin db
        const user = await db.user.findByPk(decyrptedIdString,{
            include:[{model:db.pub,include:[db.user_notes]}, db.user_notes]
        })
        // mount user on res.local
        res.locals.user = user
    }else{
          // if no user or cookie: set user to null in res.local
          res.locals.user= null
    }
    // move on to next route or middleware
    next()
})
// controllers
app.use("/users", require ("./controllers/users"))
app.use("/pubs", require ("./controllers/pubs"))
app.use("/user_notes", require ("./controllers/user_notes"))

// routes
app.get ("/", (req, res)=>{
    res.render("home.ejs")
    console.log("the currently logged in user is:, res.locals.user")
})


// listen on a port
app.listen(PORT, ()=> console.log (`hamsters are running on port: ${PORT} 🐹`))
