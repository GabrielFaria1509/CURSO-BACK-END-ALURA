import getTodosPosts from "../models/postsModels.js";

export async function listarPosts(req, res)  {
    // Chama a função getTodosPosts para obter os posts do banco de dados.
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
    res.status(200).json(posts);
    } 
    
    
 