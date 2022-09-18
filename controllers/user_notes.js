const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")
const { default: axios } = require("axios")
const { query } = require("express")


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
        visitDate: req.body.visitDate,
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
// display a form to edit comments
router.get ("/edit/:id", async (req,res)=>{
  const pub = await db.pub.findOne({
    where:{
      id: req.params.id
    }
  })
  res.render("user_notes/edit.ejs", {
    pub: pub
  })
})

// PUT  new data into the the comments
router.put ("/comments/:id", (req, res)=>{
  db.user_notes.update({
    // reassigns 
    userId: res.locals.user.id,
    pubId: req.params.id,
    visitDate: req.body.visitDate,
    pupFriendly: req.body.pupFriendly,
    beers:req.body.beers,
    food:req.body.food,
    comments: req.body.comments,
  },
  {
  where : {
    // id to find data in db
    id:req.params.id
  }
  })
  res.redirect("/users/favs")
})



module.exports = router