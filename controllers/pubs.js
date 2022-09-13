const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")

// GET/pubs  shows a list of pubs based on user queries
router.get("/new", (req, res)=>{
    // res.send('show a new user form')
    res.render("users/new.ejs")
  
})
//  GET /pubs/:id lists information about a specific club

// POST /pubs shows a form allowing a user to add a new pub

// PUT /pubs/edit/:id shows a form that allows a user to update information 

// DELETE /pubs/:id allows the user to delete the pub from their favorites 












module.exports = router