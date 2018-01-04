// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to Matt's API! Here are all of the endpoints...",
    documentation_url: "https://github.com/mattsteffey/express_self_api/README.md", 
    base_url: "https://whispering-ravine-69221.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "About Me Page"}, 
      {method: "POST", path: "/api/videogames", description: "Submit a new Video Game"}, 
      {method: "DELETE", path: "/api/videogames/:id", description: "Delete a Video Game"}
    ]
  });
});



app.get('/api/videogames', function(req, res){
  db.videogames.find(function(err, airplanes){
    if(err){res.send("There has been an error retrieving videogames.",err);}
    res.json(videogames);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
