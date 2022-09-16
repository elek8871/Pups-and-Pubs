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
router.post ("/", async (req, res) =>{
    try{
      // creates a new comment
      const newComment = await db.user_notes.create
      ({
        pupFriendly: req.body.pupFriendly,
        beers: req.body.beers,
        food: req.body.food,
        comments: req.body.comments,
        userId: res.locals.user.dataValues.id,
        pubId: req.body.pubId

      })
      console.log(req.body)
         res.redirect("/users/favs")
    }catch(error){
      console.log(error)
      res.send("server error")
    }
  })

// PUT /pubs/edit/:id shows a form that allows a user to comment on their fav pubs
router.put ("/edit:id", (req,res)=>{
  
})

// DELETE COMMENTS

module.exports = router