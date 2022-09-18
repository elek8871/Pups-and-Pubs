// REQUIRED THINGS
const express =require("express")
const router = express.Router()
const db= require("../models")
const crypto = require("crypto-js")
const bcrypt= require("bcrypt")
const { default: axios } = require("axios")

//************  ROUTES TO SEARCH FOR PUBS AND DISPLAY A LIST OF PUBS  ******************

//  ---------- WORKS ----------------
//  GET/pubs  shows a list of pubs based on user queries 
router.get("/index", (req, res)=>{
    // axios call and save response.data
    // console.log(req.query, "city test")
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${req.query.city}`)
        .then (response =>{
            // console.log("testing string", response.data)
            res.render('pubs/index.ejs', {pubs:response.data})
        })
        .catch(console.log)
})
// ---------WORKS -------------
//  GET /pubs/:id lists information about a specific pub 
router.get("/details/:id", (req, res)=>{
    // console.log(req.params.id , "id route test")
    axios.get(`https://api.openbrewerydb.org/breweries/${req.params.id}`)
        .then (response =>{
            res.render("pubs/details.ejs",{pubs:response.data} )
        })
        .catch(console.log)
})
// ---------------WORKS -------------------------
// GET /pubs  displays a for to create a new pub
// router.get ("/new" ,(req, res)=>{   
//     res.render ("pubs/new.ejs")
// })


//  ---------------------WORKS--------------------------------------------
// POST/ pubs add new pubs to user favorites and redirects to user profile
router.post ("/", async (req, res)=>{
    try{
        console.log("fav",req.body)
        // find or create
        const [pub] = await db.pub.findOrCreate({
            where:{
                name: req.body.name,
                street: req.body.street,
                city: req.body.city,
                phone: req.body.phone,
                website_url: req.body.url
            }
        })
        // associate pub  with user favorites
        // pub.addUser(req.locals.user)
        await res.locals.user.addPub(pub)
        // console.log("fav 2 test")
        res.redirect("/users/favs")
    } catch(error) {
        console.log(error)
        res.send("server error")
    }
})
// -------------------WORKS---------------------------
// DELETE FROM FAVORITES
router.delete('/:pubId', (req,res)=>{
    db.pub.destroy({
      where: {id: req.params.pubId}
    })
    .then( ()=>{
      res.redirect("/users/favs")
    })
  })

module.exports = router