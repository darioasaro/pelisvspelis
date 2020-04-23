const dB = require('../../services/database/database');

exports.getCompetencias = async(req,res) =>{
    
    await dB.getCompetencias((err,row)=>{
        if(err)res.status(500).js
        console.log('data',row)
        res.status(200).send(row);
    })
};