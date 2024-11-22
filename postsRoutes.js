import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts , postarNovoPost , uploadImagem , atualizarNovoPost } from "../controllers/postsControllers.js";    //back end que usa .js 

const corsoptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus : 200
}

const storage = multer.diskStorage({              //trechoi necessário para usuários dw windows
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

//linux ou mac
//const upload = multer({ dest: "./uploads" })

const routes = (app) => {

    // Habilita o middleware JSON para que o Express possa interpretar requisições com corpo no formato JSON.
    app.use(express.json());
    app.use(cors(corsoptions));

    // Rota GET para obter todos os posts.
    app.get("/posts",listarPosts);
    
    //rota para enviar um post
    app.post("/posts",postarNovoPost)
    
    app.post("/upload",upload.single("imagem"),uploadImagem)//chama a função controladora para processamento da imagem
   
    //rota para upload de imagens("assumindo" uma única imagem chamad imagem por vez)
    app.put("/upload/:id",atualizarNovoPost)
}

export default routes;

  
