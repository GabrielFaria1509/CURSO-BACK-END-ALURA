//comandos para funcionar
//abrir no terminal o prompt de comando
//digitar npm init es6 -y e dar enter
//npm install express e enter
//ter instalado o node.js  no pc 
//para abrir servidor node nomearquivo.
import express from "express";        //caso raro que precisa ;

const posts = [
    //objeto = conjunto de estruras de chave e valor
    { id : 1 , descricao : "uma foto teste", imagem : "https://placecats.com/millie/300/150"},
    { id : 2 , descricao : "uma gato fazendo yoga", imagem : "https://placecats.com/millie/300/150"},
    { id : 3 , descricao : "uma gato comendo panqueca", imagem : "https://placecats.com/millie/300/150"},
    
];

//http://localhost:3000/api no navegador para acessar server

const app = express();      //chamo o pacote express //chamo a função e a variável app usa as funcionalidades de express  //uso const já que o app é uma constante que uso para receber as funçóes do express

app.use(express.json()); //converte os arquivos de texto grande para configurar o Express para que ele possa entender e processar dados no formato JSON (JavaScript Object Notation),

app.listen(3000, () => {   //abre o servidor  //3000 é a porta que o servidor vai atender os chamados //todo server é um computador //3000 é uma porta local // criei um servidor local
    console.log("servidor escutando...");
});

app.get("/posts",(req,res) => {
    res.status(200).json(posts)
});

function buscarPostPorID(id){       //crio uma rota          //req e res é "requisição e resposta"  //qd tiver uma conexão na porta 3000 na rota "posts"" vai rolar algo
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id",(req,res) => {        
    const index = buscarPostPorID(req.params.id);   //params == parâmetro da requisição
    res.status(200).json(posts[index]);   //200 é um código atp // diz que a requisição foi enviada co sucesso //consulte http.cat
    //posts é o array //index entre colchetes é a posição
});



