var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});

function proyecto() {
}

proyecto.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM proyectos;';
    this.query(req,queryStr,done);

};

proyecto.prototype.detalleproyecto=function(req,done){
    var queryStr = "SELECT * FROM proyectos WHERE proyectos_id ="+req.params.proyectos_id;
        this.query(req,queryStr,done);
};

proyecto.prototype.agregar=function(req,done){
        console.log(req.body);
        var imagen = this.addQuotes(req.body.imagen_proyectos);
        var titulo = this.addQuotes(req.body.titulo);
        var objetivo = this.addQuotes(req.body.objetivo);
        var descripcion = this.addQuotes(req.body.descripcion);
        var ubicacion = this.addQuotes(req.body.ubicacion);
        var coordinador = this.addQuotes(req.body.coordinador);
        var fecha = this.addQuotes(req.body.fecha);
        var queryStr = "INSERT INTO proyectos (`imagen_proyectos`, `titulo`, `objetivo`, `descripcion`,  `ubicacion`, `coordinador`, `fecha`) VALUES ("+imagen+", "+titulo+", "+objetivo+", "+descripcion+", "+ubicacion+", "+coordinador+", "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);

};

proyecto.prototype.query = function (req,queryString,done) {
    pool.getConnection(function(err, connection) {
        // Use the connection
        if (err) {
            done({"msg": "DB connection error"});
        }
        else{
            connection.query('use amatea');
            connection.query( queryString, function(err, rows) {
                // And done with the connection.
                console.log(err);
                if (err) {
                    done({"msg": "DB error. Please check DB log."});
                }
                else{
                    console.log('The solution is: ', rows);
                    done(rows);
                }
                connection.release();
            });
        }

    });
};

proyecto.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new proyecto();