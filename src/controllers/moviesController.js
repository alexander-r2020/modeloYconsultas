const db = require('../database/models');
const {Op} = require("sequelize")

const controller={
    list:(req,res)=>{
        db.Movies.findAll()
        .then(movie=>{
            res.render("moviesList",{movies:movie})
        })
        .catch(error=>console.log(error))
        
    },
    new:(req,res)=>{
        db.Movies.findAll({
            order:[["release_date","DESC"]]
        })
        .then(movie=>{
            res.render("newestMovies",{movies:movie})
        })
        .catch(error=>console.log(error))
        
    },
    recomended:(req,res)=>{
        db.Movies.findAll({
            where:{
                rating:{[Op.gte]:8}
            },
            order:[
                ["rating","DESC"]
            ]
        })
        .then(movie=>{
            res.render("recommendedMovies",{movies:movie})
        })
        .catch(error=>console.log(error))
    },
    detail:(req,res)=>{
        db.Movies.findByPk(req.params.id)
        .then(movie=>{
            res.render("moviesDetail",{movie})
        })
        .catch(error=>console.log(error))
    }
}
module.exports=controller