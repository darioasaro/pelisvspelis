const dB = require('../../services/database/database');

exports.getCompetencias = async(req,res) =>{
    
    await dB.getCompetencias((err,result)=>{
        if(err)res.status(500).json({response:false,message:'Internal Server Error'})
        console.log(result)
        const data = result.map(comp=>{
            return {nombre:comp.nombre,id:comp.id}
        })
        console.log(data)
        res.status(200).send(data);
    })
};
exports.getDosPeliculas = async (req,res)=>{
    const id = req.params.id
    await dB.getDosPeliculas((err,result)=>{
    if(err)res.status(500).json({response:false,message:'Internal Server Error'})
    const competencia = req.competencia.nombre
    const opciones = {
        competencia,
        peliculas:result
    }  
    res.status(200).json(opciones) 
    })
}

exports.setVoto = async(req,res)=>{
    const idPelicula = req.body.idPelicula
    const idCompetencia = req.params.id
    await dB.insertVoto(idPelicula,idCompetencia,(err,result)=>{
        if(err)res.status(500).json({response:false,message:'Internal Server Error'})
        res.status(200).json({result:true,message:'Added vote'})
    })
    
}