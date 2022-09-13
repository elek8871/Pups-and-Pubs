const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")

// GET/pubs  shows a list of pubs based on user queries
router.get("/new", (req, res)=>{
    res.send('List of pubs')
    // res.render("users/new.ejs")
  
})
//  GET /pubs/:id lists information about a specific club
router.get ("/", (req, res)=>{
    res.send("List details ")
})

// POST /pubs/new shows a form allowing a user to their favorites
router.post ("/", (req,res)=>{
    res.send ("Form allowing user to add pub to their fav")
})

// PUT /pubs/edit/:id shows a form that allows a user to update information 
router.put ("/edit:id", (req,res)=>{
    res.send ("Allows user to update pub info")
})

// DELETE /pubs/:id allows the user to delete the pub from their favorites 
router.delete("/:id", (req,res)=>{
    res.send ("remove from your favorites")
})




module.exports = router