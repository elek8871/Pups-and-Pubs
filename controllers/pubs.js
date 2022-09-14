const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")

// GET/pubs  shows a list of pubs based on user queries *route works
router.get("/index", (req, res)=>{
    res.send('List of pubs')
    // res.render("users/new.ejs")
    // axios call and save response.data
  
})
//  GET /pubs/:id lists information about a specific pub *route works
router.get ("/:id", (req, res)=>{
    res.send("List details ")
})

// POST /pubs/new shows a form allowing a user to their favorites
router.post ("/new", (req,res)=>{
    res.send ("Form allowing user to add pub to their fav")
})

// PUT /pubs/edit/:id shows a form that allows a user to comment on their fav pubs
router.put ("/edit:id", (req,res)=>{
    res.send ("Allows user to update pub info")
})

// DELETE /pubs/:id allows the user to delete the pub from their favorites 
router.delete("/:id", (req,res)=>{
    res.send ("remove from your favorites")
})




module.exports = router