const dB = require('../services/database/database.js');

exports.verificarCompetencia=async(req,res,next)=>{
    const id = req.params.id;
     await dB.getCompetencia(id,(err,response)=>{
         if(err)res.status(500).json({resul:false,message:'Internal Server Error'})
         if(response.length>0){
            req.competencia = response[0] 
            next();

         }
         else{
             res.status(404).json({result:false,message:'Not Found'})
         }
     })

}