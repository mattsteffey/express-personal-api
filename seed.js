// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var new_VideoGames = [
{
	title:"Diablo 3" ,
	console:"PC" ,
	year: "2012",
	multiplayer: true,
},
{
	title:"Destiny" ,
	console:"PS4" ,
	year: "2014",
	multiplayer: true,
},
{
	title:"Denver Defenders" ,
	console:"PC" ,
	year: "2017",
	multiplayer: false,
},
{
	title:"Tetris" ,
	console:"Arcade" ,
	year: "1984",
	multiplayer: true,
},
];

// db.VideoGames.remove({}, function(err, VideoGames){
// 	if(err){console.log('Error:',err);}
// 	else{
// 		db.VideoGames.create(new_VideoGames, function(err, myAirplanes){
// 			if(err){return console.log('Error:', err);}
// 			console.log('Created New Game');
// 			process.exit();
// 		});
// 	}
// });