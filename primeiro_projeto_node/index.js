var nome = "Guilherme";
var salario = 150.00;
var status = true;

const pessoas = [];

pessoas.push("Guilherme");
pessoas.push("Bruna");
pessoas.push("Gabriel");

const aluno = {
    nome : "Guilherme",
    RA: "123456",
    email: "guilherme.pires@unisep.edu.br"
}

aluno.telefone = "46 999999999";

console.log("Nome: ", nome);
console.log("Salario:", salario);
console.log("Situação:", status);
console.log("Pessoas: ", pessoas);
console.log("Total de pessoas: ", pessoas.length);
console.log("Aluno: ", aluno);

for(var i = 0; i < pessoas.length; i++){
    console.log(pessoas[i]);
}

pessoas.forEach((valor, index)=>{
    console.log(index, " - ", valor);
});