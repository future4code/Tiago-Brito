// Exercícios de interpretação de código //

// -------------EXERCÍCIO 1---------------

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// -------------EXERCÍCIO 2---------------
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// -------------EXERCÍCIO 3---------------

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// -------------EXERCÍCIO 4---------------
const nome = "João";

let idade = 17;

let idadeMinima = 18;

if (idade < 18) {

   console.log("Olá Tiago Você não pode dirigir")

}

if (idade >= 18) {

   console.log("Você passou no nosso teste e já pode dirigir!")

}

// -------------EXERCÍCIO 5---------------

/*const horario1= (prompt("Responda M(Matutino), V(Vespertino)) ou N(Noturno): Em qual periodo voce estuda?")){
    
    if(horario1 == 'M'){
    console.log("Bom Dia!!");
    
    }else if(horario1==='V'){
    console.log("Boa tarde!!");
    
    }else if(horario1=='N'){
    console.logt("Boa noite");
    
    }else{
    console.log("Valor inválido!")
    }
    }*/
// -------------EXERCÍCIO 6---------------
   
const horario= (prompt("Responda M(Matutino), V(Vespertino)) ou N(Noturno): Em qual periodo voce estuda?"))
switch(true){
        
case horario == 'V':
 console.log("Bom Dia!!");
   break
case horario == 'M':
 console.log("Bom Dia!!");
    break
case horario == 'M':
 console.log("Bom Dia!!");
    break
        default:
console.log("Valor inválido!")
    break
} 