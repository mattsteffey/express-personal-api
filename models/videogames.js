var mongoose = require('mongoose');
Schema = mongoose.Schema;

var VideoGameSchema = new Schema({
	title: String,
	console: String,
	year: String,
	muliplayer: Boolean,
});

var VideoGame = mongoose.model('VideoGame', VideoGameSchema);

module.exports = VideoGame;