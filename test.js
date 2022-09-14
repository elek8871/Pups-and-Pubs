fetch('https://api.openbrewerydb.org/breweries') 
  .then(function(responseData) {
    return responseData.json();
  })
  .then(function(jsonData) {
    console.log("Here is the data:", jsonData);
  })