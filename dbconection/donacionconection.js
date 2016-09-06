var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var donacionesSchema = new Schema({
	nombre: String,
	correo: String,
	cantidad: Number,
	estado: { type: String, default: 'Pendiente'},
	timestamp: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Donacion', donacionesSchema);