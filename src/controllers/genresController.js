const db = require('../database/models');
const {Op} = require("sequelize")

const controller={
    list:(req,res)=>{
        db.Genres.findAll()
        .then(genre=>{
            res.render("genresList",{genres:genre})
        })
        .catch(error=>console.log(error))
        
    },
    detail:(req,res)=>{
        db.Genres.findByPk(req.params.id)
        .then(genre=>{
            res.render("genresDetail",{genre:genre})
        })
        .catch(error=>console.log(error))
    }
}
module.exports=controller;    