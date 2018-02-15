// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var express = require('express');
var db = require('./models');
var app = express();

var new_videogames = [
{
	title:"Denver Defenders" ,
	console:"Web Browser" ,
	year: 2017,
	multiplayer: false,
},
{
	title:"The Legend of Zelda: A Link to the Past" ,
	console:"NES" ,
	year: 1995,
	multiplayer: false,
},
{
	title:"Diablo 3" ,
	console:"PS4, PC, Mac" ,
	year: 2015,
	multiplayer: true,
},
{
	title:"Attack From Mars" ,
	console:"Pinball/Arcade" ,
	year: 1995,
	multiplayer: true,
}
];

//removing all videogames from the list before seeding again
db.Videogames.remove({}, function(err, videogames){
	if(err)
		{console.log('Experienced a problem removing ',err);}
	else{
		db.Videogames.create(new_videogames, function(err, myVideogames){
			if(err){return console.log('No problems ', err);}
			process.exit();
		});
	}
});
