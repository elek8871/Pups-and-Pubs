// REQUIRED THINGS
const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")
const { default: axios } = require("axios")

//************  ROUTES TO SEARCH FOR PUBS AND DISPLAY A LIST OF PUBS  ******************

// GET/pubs  shows a list of pubs based on user queries 
router.get("/index", (req, res)=>{
    // axios call and save response.data
    axios.get("https://api.openbrewerydb.org/breweries?by_city=denver&per_page=3")
        .then (response =>{
            res.render('index.ejs', {pubs:response.data})
        })
        .catch(console.log) 
})
//  GET /pubs/:id lists information about a specific pub *route works
router.get ("/:id", (req, res)=>{
    res.send("List details ")
})

//********* ROUTES TO ADD AND EDIT USER FAVORITES **************************

// GET/ faves READs all favorited pubs and displays to the user
router.get ("/favs", async (req, res)=>{
    try{
        const allFavs = await db.fave.findAll()
        res.render("favs.ejs",{
            allFavs
        })
    } catch(error){
        console.log(error)
        res.send("server error")
    }
})
// POST /pubs/favs - creates a new fave and redirect user to display user favs
router.post ("/new",async (req,res)=>{
    try{
        console.log(req.body)
    }catch(error){
        console.log(error)
        res.send("server error")
    }
})

// PUT /pubs/edit/:id shows a form that allows a user to comment on their fav pubs
router.put ("/edit:id", (req,res)=>{
  
})

// DELETE /pubs/:id allows the user to delete the pub from their favorites 
router.delete("/:id", (req,res)=>{
    res.send ("remove from your favorites")
})




module.exports = router