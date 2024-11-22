import {getTodosPosts , criarPost, atualizarPost} from "../models/postsModels.js";
import fs from "fs"
import  gerarDescricaoComGemini from "../services/geminiservice.js"

export async function listarPosts(req, res)  {
    // Chama a função getTodosPosts para obter os posts do banco de dados.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
    } 
export async function postarNovoPost(req,res){
        const novoPost = req.body;
        try{
            const postCriado = await criarPost(novoPost);
            res.status(200).json(postCriado);
        } catch(erro){         //o quie fazer se der errado a criacão do post
            console.error(erro);
            res.status(500).json({"Eroo" :"Falha na requisicao "})
        }

}

export async function uploadImagem(req,res){
    const novoPost = {
        descricao : "",
        imgUrl : req.file.originalname,
        alt : ""
    };


    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualziada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path , imagemAtualziada)
        res.status(200).json(postCriado);
    } catch(erro){         //o quie fazer se der errado a criacão do post
        console.error(erro);
        res.status(500).json({"Eroo" :"Falha na requisicao "})
    }

}

export async function atualizarNovoPost(req,res){
    const id = req.params.id;
    const urlIamgem = `http://localhost:300/${id}.png`
    
    try{
        const imgmBuffer = fs.readFileSync(`uploads/${id}.png`)
        const descricao = await gerarDescricaoComGemini(imgmBuffer)

        const post = {            //objeto que representa o post com os dados que vieram na requsição
            imgUrl : urlIamgem,
            descricao : descricao,
            alt : req.body.alt
        }
        
        const postCriado = await atualizarPost(id,post);
        res.status(200).json(postCriado);
    } catch(erro){         //o quie fazer se der errado a criacão do post
        console.error(erro);
        res.status(500).json({"Eroo" :"Falha na requisicao "})
    }

}




    
    
 
