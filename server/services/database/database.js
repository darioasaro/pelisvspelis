const dataBase = require("../../config/connection");

exports.getCompetencias = (callback) => {
  dataBase.connection.query(
    `SELECT id,nombre,genero_id from competencias`,
    (err, rows) => {
      if (err) throw err;
      return callback(err, rows);
    }
  );
};

exports.getCompetencia = (id,callback)=>{
    dataBase.connection.query(
        `SELECT id,nombre,genero_id from competencias WHERE id = ?`,[id],
        (err, rows) => {
          if (err) throw err;
          return callback(err, rows);
        }
      );
}
exports.getPeliculaPorId = (id,callback)=>{
    dataBase.connection.query(
        `SELECT id,poster,titulo from pelicula WHERE id = ?`,[id],
        (err, rows) => {
          if (err) throw err;
          return callback(err, rows);
        }
      );
}

exports.getDosPeliculasXGenero = (id, callback) => {
  dataBase.connection.query(
    `SELECT p.id,p.poster,p.titulo FROM pelicula p 
    INNER JOIN genero g WHERE ? = g.id ORDER BY rand() LIMIT 2 `,
    [id],
    (err, row) => {
      if (err) throw err;
      return callback(err, row);
    }
  );
};

exports.getDosPeliculas = (callback) => {
  dataBase.connection.query(
    `SELECT id,poster,titulo FROM pelicula 
     ORDER BY rand() LIMIT 2`,
    (err, row) => {
      if (err) throw err;
      return callback(err, row);
    }
  );
};

exports.insertVoto=(idPelicula,idCompetencia,callback)=>{
  dataBase.connection.query(
    `INSERT INTO votos (pelicula_id,competencia_id) 
    VALUES(?,?)`,[idPelicula,idCompetencia],(err,row)=>{
      if (err) throw err;
      return callback(err,row);
    })
}
exports.getResults =(idCompetencia,callback)=>{
  dataBase.connection.query(
    `SELECT p.titulo,COUNT(v.competencia_id) as total 
    FROM votos v 
    INNER JOIN pelicula p  WHERE v.competencia_id = 4 AND v.pelicula_id = p.id  
    GROUP BY p.titulo 
    ORDER BY total DESC 
    LIMIT 3`,[idCompetencia,(err,result)=>{

     }]
  
  )
}