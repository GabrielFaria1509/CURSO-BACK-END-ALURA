import express from "express";
import { listarPosts } from "../controllers/postsControllers.js";    //back end que usa .js 

const routes = (app) => {

    // Habilita o middleware JSON para que o Express possa interpretar requisições com corpo no formato JSON.
    app.use(express.json());

    // Rota GET para obter todos os posts.
    app.get("/posts",listarPosts);
}

export default routes;

  