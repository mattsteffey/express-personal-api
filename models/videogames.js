var mongoose = require('mongoose');
Schema = mongoose.Schema;

var VideoGamesSchema = new Schema({
	title: String,
	console: String,
	year: String,
	muliplayer: Boolean,
});

var VideoGames = mongoose.model('VideoGames', VideoGamesSchema);

module.exports = VideoGames;