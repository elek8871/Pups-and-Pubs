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

// ----------------------WORKS-------------------------------
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
      // console.log(req.body)
         res.redirect("/users/favs")
    }catch(error){
      console.log(error)
      res.send("server error")
    }
  })

// ------- WORKS--------------
// display a from to edit comments
router.get ("/edit", (req,res)=>{
  res.render("user_notes/edit")
})

// PUT  new data into the the comments
router.put ("/comments", (req, res)=>{
  db.user_notes.update({

  })
  // reassign values
  comments[req.params.id].pupFriendly = req.body.pupFriendly
  comments[req.params.id].beers = req.body.beers
  comments[req.params.id].food = req.body.food
  comments[req.params.id].comments = req.body.comments
  // save the edited comments to the db

})



module.exports = router