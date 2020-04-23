const dataBase = require('../../config/connection')

exports.getCompetencias = (callback)=>{
    dataBase.connection.query(`SELECT nombre from competencias`,(err,rows)=>{
        if(err) throw err
        return callback(err,rows)

    })
}