import express from 'express';

const app = express();

/**
 * *GET => BUSCAR
 * POST => SALVAR
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH => aLTERAÇÃO ESPECIFICA
 */

 app.get("/", (request, response)=> {
     return response.json({message: "Hello World NLW#4!!"});
 });
 //1 parame => Rota(recurso api)
 //2 param => request, response

 app.post("/", (request, response)=>{
     //Recebeu dados para salvar
     return response.json({message: "Os dados foram salvos com sucesso!"});
 });

app.listen(3333, () => console.log("Server is running!"));