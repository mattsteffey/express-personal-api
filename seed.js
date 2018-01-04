
// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_videogames = [
{
	title:"Diablo 3" ,
	console:"PC" ,
	year: 2012,
	multiplayer: true,
},
{
	title:"Destiny" ,
	console:"PS4" ,
	year: 2014,
	multiplayer: true,
},
{
	title:"Denver Defenders" ,
	console:"PC" ,
	year: 2017,
	multiplayer: false,
},
{
	title:"Tetris" ,
	console:"Arcade" ,
	year: 1984,
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