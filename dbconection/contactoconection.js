var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var contactoSchema = new Schema({
  nombre: String,
  apellido: String,
  organizacion: String,
  celular: String,
  email: String,
  comentario: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contacto', contactoSchema);