import express from "express";
import multer from "multer";
import { listarPosts , postarNovoPost , uploadImagem } from "../controllers/postsControllers.js";    //back end que usa .js 

// Configura o armazenamento das imagens em disco, utilizando o multer.diskStorage. 
// Essa configuração é específica para sistemas Windows, garantindo que o caminho para as imagens seja corretamente definido.
const storage = multer.diskStorage({               
    destination: function (req, file, cb) {
        // Define o diretório de destino para as imagens.
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // Define o nome do arquivo, mantendo o nome original.
        cb(null, file.originalname);
    }
})

// Cria uma instância do multer, configurando o destino dos arquivos e o armazenamento.
// Essa configuração é específica para sistemas Windows.
const upload = multer({ dest: "./uploads" , storage})

// Para sistemas Linux ou macOS, a configuração seria mais simples:
// const upload = multer({ dest: "./uploads" })

const routes = (app) => {

    // Habilita o middleware JSON para que o Express possa interpretar requisições com corpo no formato JSON.
    app.use(express.json());

    // Rota GET para obter todos os posts.
    app.get("/posts",listarPosts);
    
    // Rota para enviar um novo post.
    app.post("/posts",postarNovoPost)
    // Rota para fazer upload de uma imagem, utilizando o middleware multer.
    // O parâmetro "imagem" indica o nome do campo no formulário HTML.
    app.post("/upload",upload.single("imagem"),uploadImagem)
}

export default routes;
