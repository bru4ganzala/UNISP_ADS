const express = require("express")

const app = express();

app.get("/alunos",(request, response) => {
     
  //http://localhost:8080/alunos?filtro=%22Bruna%22
    const filtro = request.query.filtro;

    console.log(filtro);
    
    const alunos = [
        { nome: "Bruna" },
        { nome: "Bruno" },
        { nome: "Maria" },
        { nome: "Gab" },
        { nome: "Tati" },
    ]
    response.send(alunos);
});


app.listen(8080, ()=> {
    console.log(" O servidor esta rodando na porta 8080")
})