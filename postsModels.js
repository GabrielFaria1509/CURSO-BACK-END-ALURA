import conectarAoBanco from "../dbConfig.js"      //importo o que chamo o banco   //uso uma barra pro dbConfig que a pasta não fiz a pasta somente com o dbConfig.js // essa pasta 
// essa pasta tem as pastas das outras partes mas não a exclusiva de config

//model é a camada que faz a conexão da aplicação  com o banco
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados utilizando a string de conexão fornecida pela variável de ambiente STRING_CONEXAO.

// Função assíncrona que retorna todos os posts de uma coleção específica no banco de dados.
export default async function getTodosPosts() {
    // Obtém o banco de dados "imersão-instabyre" da conexão estabelecida.
    const db = conexao.db("imersão-instabyre");
    
    // Obtém a coleção "posts" do banco de dados.
    const colecao = db.collection("posts");
    
    // Executa uma consulta para encontrar todos os documentos da coleção e retorna os resultados como um array.
    return colecao.find().toArray();
  };