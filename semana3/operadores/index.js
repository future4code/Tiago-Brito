//Exercícios de interpretação de código
//----------------- Exercicio1 -------------------------
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

a-  false
b-  false
c-  true
e- boolean*/

//----------------- Exercicio2 -------------------------
/*let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

a-  undefined
b-  null
c- 11
d-  3
e- (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f-  9*/

//-----------------------------------------------------------
//**Exercícios de escrita de código**
//----------------- Exercicio1 -------------------------

/*let idadeamiga = prompt("qual a idade da sua melhor amiga")
let idade = prompt("qual sua idade")

console.log("Resposta: 1-A) " + idade + "")
console.log("Resposta: 1-B)" + idadeamiga + "")
console.log("Sua idade é maior do que a do seu melhor amigo? 1-C)", idade >= idadeamiga)

resultado = idadeamiga - idade
console.log('1-D', resultado)*/

//----------------- Exercicio2 -------------------------
/*let numpar = prompt("Insira um número par")

console.log("Resposta: 2-A) " + numpar + "")

let divisao = 2
resultado = numpar % divisao

console.log('2-B', resultado)*/

//2-C ) O resultado sempre sera 0
//2-D ) O resultado sempre sera 1

//----------------- Exercicio3 -------------------------
let listaDetarefas = [] 

let primeiraTarefa = prompt('Qual sua primeira tarefa?')
let segundaTarefa = prompt('Qual sua segunda tarefa?')
let terceiraTarefa = prompt('Qual sua terceira tarefa?')

listaDetarefas.push(primeiraTarefa)
listaDetarefas.push(segundaTarefa)
listaDetarefas.push(terceiraTarefa)

for(const i of listaDetarefas) 
         console.log(i);


         let remove = Number(prompt("digite 0, 1 ou 2 para escolher o indice:"))

         listaDetarefas.splice(remove, 1)

         for(const i of listaDetarefas) 
         console.log(i);


         /*Conversar em #geral
console.log (+listaDetarefas+'')
let remove = Number(prompt("digite 0, 1 ou 2 para escolher o indice:"))
let tarefaRealizada = prompt('Qual tarefa voce realizou')
let i = tarefaRealizada
listaDetarefas.splice(i, 1)
console.log(+listaDetarefas+'')*/




/*d. Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2 
e. Remova da lista o item de índice que o usuário escolheu.
f. Imprima o array no console*/


//----------------- Exercicio4 -------------------------

/*const nome = prompt('Qual seu nome?')
const email = prompt('Qual seu email?')

const emailNome = `${email} ${nome}`

const resultado = 'O e-mail ' +email + ' foi cadastrado com sucesso. Seja bem-vinda(o),' + nome + '!'

console.log(resultado)*/


/*faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a seguinte mensagem:*/
/*O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/