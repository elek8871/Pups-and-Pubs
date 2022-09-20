const axios = require('axios')

axios.get ('https://api.openbrewerydb.org/breweries?by_city=denver&per_page=3') 
  .then(function(response) {
    // return response.json();
    console.log(response.data)
  })

  
  // app.get('/results', (req, res) => {
//  7890
  // by_city = user_query
  // & "dogs allowed"
  // app.get('/results', (req, res) => {
  //   axios.get(`http://www.omdbapi.com/?s=${req.query.movieSearch}&apikey=${process.env.OMDB_API_KEY}`)
  //     .then(response => {
  //       res.render('results.ejs', { movies: response.data.Search })
  //     })
  //     .catch(console.log)
  // })