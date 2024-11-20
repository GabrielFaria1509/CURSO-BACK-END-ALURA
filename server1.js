//comandos para funcionar
//abrir no terminal o prompt de comando
//digitar npm init es6 -y e dar enter
//npm install express e enter
//ter instalado o node.js  no pc 
//para abrir servidor node nomearquivo.
//http://localhost:3000/api no navegador para acessar server
import express from "express"; // Importa o framework Express, que será utilizado para criar a aplicação web.

import routes from "./src/config/routes/postsRoutes.js";

// Cria uma instância do Express, que será utilizada para definir as rotas e as funcionalidades da aplicação.
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor estiver ouvindo por conexões.
app.listen(3000, () => {
  console.log("servidor escutando...");
});









