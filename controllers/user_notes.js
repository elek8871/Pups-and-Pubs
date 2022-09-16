const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")
const { default: axios } = require("axios")


// ********** ROUTES  TO ADD AND EDIT COMMENTS*****************************

router.get("/comments", (req,res)=>{
    res.render("user_notes/comments.ejs")
})

// POST /comments -> creates a new comment
router.post ("/comments/", async (req, res) =>{
    try{
      const newComment = await db.user_notes.create
      ({
        pupFriendly: req.body.pupFriendly,
        beers: req.body.beers,
        food: req.body.food,
        comments: req.body.comments
        // need user and pub id to link to db
      })
      // console.log("%^%^%^%^%^%^%^%^%^",newComment)
      res.redirect("/users/favs")
    }catch(error){
      console.log(error)
      res.send("server error")
    }
  })

// PUT /pubs/edit/:id shows a form that allows a user to comment on their fav pubs
router.put ("/edit:id", (req,res)=>{
  
})

// EDIT COMMENTS
// DELETE COMMENTS

module.exports = router