const dB = require('../services/database/database.js');

exports.verificarPelicula = async(req,res,next)=>{
    const id = req.body.idPelicula;
     await dB.getPeliculaPorId(id,(err,response)=>{
         if(err)res.status(500).json({resul:false,message:'Internal Server Error'})
         if(response.length>0){
            req.pelicula = response[0] 
            next();
         }
         else{
             res.status(404).json({result:false,message:'Not Found'})
         }
     })
}