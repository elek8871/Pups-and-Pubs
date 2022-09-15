const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")
const { default: axios } = require("axios")


//********* ROUTES TO ADD AND EDIT USER FAVORITES **************************


// GET/ faves READs all favorited pubs and displays to the user
router.get ("/favs", async (req, res)=>{
    try{
        const allFavs = await db.fav.findAll()
        res.render("favs.ejs",{
            allFavs
        })
    } catch(error){
        console.log(error)
        res.send("server error")
    }
})

// POST /pubs/favs - creates a new fave and redirect user to their profile page
router.post ("/favs",async (req,res)=>{
    try{
        console.log(req.body)
        await db.fav.create(req.body)
        res.redirect(/users/profile)
    }catch(error){
        console.log(error)
        res.send("server error")
    }
})



// DELETE /pubs/:id allows the user to delete the pub from their favorites 
router.delete("/:id", (req,res)=>{
    res.send ("remove from your favorites")
})

// ********** ROUTES  TO ADD AND EDIT COMMENTS

// PUT /pubs/edit/:id shows a form that allows a user to comment on their fav pubs
router.put ("/edit:id", (req,res)=>{
  
})

// EDIT COMMENTS
// DELETE COMMENTS