var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});



function contacto() {
}

contacto.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM contacto;';
    this.query(req,queryStr,done);

};

contacto.prototype.agregar=function(req,done){
        console.log(req.body);
        var nombre = this.addQuotes(req.body.nombre);
        var apellido = this.addQuotes(req.body.apellido);
        var organizacion = this.addQuotes(req.body.organizacion);
        var celular = this.addQuotes(req.body.celular);
        var email = this.addQuotes(req.body.email);
        var comentario = this.addQuotes(req.body.comentario);
        var queryStr = "INSERT INTO contacto (`nombre`, `apellido`, `organizacion`, `celular`, `email`, `comentario`) VALUES ("+nombre+", "+apellido+", "+organizacion+", "+celular+", "+email+", "+comentario+");";
        console.log(queryStr);
        this.query(req,queryStr,done);

};

contacto.prototype.query = function (req,queryString,done) {
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

contacto.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new contacto();