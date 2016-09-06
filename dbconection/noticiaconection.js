var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var noticiaSchema = new Schema({
  imagen: { type: String, default: 'img/noticias/clima.jpg'},
  titulo: String,
  descripcion: String,
  contenido_1: String,
  contenido_2: String,
  contenido_3: String,
  timestamp: { type: Date, default: Date.now}

});

module.exports = mongoose.model('Noticia', noticiaSchema);