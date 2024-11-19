//comandos para funcionar
//abrir no terminal o prompt de comando
//digitar npm init es6 -y e dar enter
//npm install express e enter
//ter instalado o node.js  no pc 
//para abrir servidor node nomearquivo.
import express from "express";        //caso raro que precisa ;

//http://localhost:3000/api no navegador para acessar server

const app = express();      //chamo o pacote express //chamo a função e a variável app usa as funcionalidades de express  //uso const já que o app é uma constante que uso para receber as funçóes do express
app.listen(3000, () => {   //abre o servidor  //3000 é a porta que o servidor vai atender os chamados //todo server é um computador //3000 é uma porta local // criei um servidor local
    console.log("servidor escutando...");
});

app.get("/api",(req,res) => {        //crio uma rota          //req e res é "requisição e resposta"  //qd tiver uma conexão na porta 3000 na rota "api"" vai rolar algo
    res.status(200).send("Boas vindas à imersão !");
});


