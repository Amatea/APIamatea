var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema = new Schema({

	name: String,
	provider: String,
	provider_id: {type: String, unique: true},
	imagen: String,
	date: {type: Date, default: Date.now}

});

module.exports = mongoose.model('User', userSchema);