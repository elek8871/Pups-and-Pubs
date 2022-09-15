const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")
const { default: axios } = require("axios")


// ********** ROUTES  TO ADD AND EDIT COMMENTS*****************************

// POST /comments -> creates a new comment
router.post ("/:id/comments", async (req, res) =>{
    try{
      const newComment = await db.comment.create
      ({
        name: req.body.name,
        content: req.body.content,
        pubId: req.params.id,
      })
      // console.log(newComment)
      res.redirect(`//${req.params.id}`)
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