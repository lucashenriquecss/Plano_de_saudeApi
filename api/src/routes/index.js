import express from "express";
import beneficiarios from "./beneficiarioRoute.js";
import planos from "./planosRoute.js";
import precos from "./precosRoute.js";



const routes = (app) => {
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"Bem vindo"})
    })

    app.use(
        express.json(),
        beneficiarios,
        planos,
        precos
        
    )
}



export default routes;
