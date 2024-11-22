import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../dbConfig.js"      // Importa a função para conectar ao banco de dados, localizada em um arquivo em um diretório acima.
// A ausência da pasta "dbConfig" pode indicar uma estrutura de projeto diferente ou uma configuração específica.

// Model: Camada responsável por interagir com o banco de dados.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Estabelece a conexão com o banco de dados usando a string de conexão fornecida pela variável de ambiente.

// Obtém todos os posts de uma coleção.
export async function getTodosPosts() {
  // Seleciona o banco de dados "imersão-instabyre".
  const db = conexao.db("imersão-instabyre");
  // Seleciona a coleção "posts" dentro do banco de dados.
  const colecao = db.collection("posts");
  // Executa uma consulta para encontrar todos os documentos (posts) e retorna os resultados como um array.
  return colecao.find().toArray();
}

// Cria um novo post na coleção.
export async function criarPost(novoPost) {
  // Seleciona o banco de dados e a coleção "posts".
  const db = conexao.db("imersão-instabyre");
  const colecao = db.collection("posts");
  // Insere um novo documento (post) na coleção e retorna o resultado da operação.
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  // Seleciona o banco de dados e a coleção "posts".
  const db = conexao.db("imersão-instabyre");
  const colecao = db.collection("posts");
  
  const objID = ObjectId.createFromHexString(id)
  // Insere um novo documento (post) na coleção e retorna o resultado da operação.
  return colecao.updateOne({_id:new ObjectId(objID)},{$set:novoPost} );
}
