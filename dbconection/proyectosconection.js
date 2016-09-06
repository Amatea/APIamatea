var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var proyectoSchema = new Schema({
  imagen: { type: String, default: 'img/proyectos/proyecto1.jpg'},
  titulo: String,
  objetivo: String,
  descripcion: String,
  ubicacion: String,
  coordinador: String,
  fecha1: Date,
  fecha2: Date

});

module.exports = mongoose.model('Proyecto', proyectoSchema);