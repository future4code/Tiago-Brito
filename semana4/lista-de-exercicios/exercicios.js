//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
  const arrayInvertido = []
  for (let i = array.lenght - 1; i >= 0; i --){
     arrayInvertido.push(array[i])
  }
  return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // implemente sua lógica aqui
   let paresAoQuadrado = array.filter((number)=>{
      if (number%2 ===0){
         return true
      }
   })
for ( let i = 0; i < paresAoQuadrado.lenght; i++){
   paresAoQuadrado[i] = paresAoQuadrado[i]**2
}
return paresAoQuadrado
}

//Exercício 3

function retornaNumerosPares (array) {
   // implemente sua lógica aqui
   let pares = array.filter((number) => {
      if (number%2 ===0){
         return true
      }
   })
   return pares
}

//Exercício 4

function retornaMaiorNumero(array) {
   // implemente sua lógica aqui
   let maior = array[0];
   for (let number of array){
      if (maior < number){
         maior = number;
      }
   }
   return maior;
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // implemente sua lógica aqui
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // implemente sua lógica aqui
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
   par = []
   i = 0
   while(i < n*2){
      if (i%2 === 0){
         par.push(i)
      }
      i++
   }
   return par
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
  if( a == b && b == c){
     return 'Equilatero'
  }if(a!= b && b != c && c != a){
return 'Escaleno'
  } else {
     return 'Isoceles'
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
   let comparador = {
      maiorNumero: 0,
      maiorDivisivelporMenor: false,
      diferenca:0 
   }
   if (num1 > num2){
      comparador.maiorNumero = num1
      comparador.maiorDivisivelporMenor = ( num1 % num2 === 0)
      comparador.diferenca = num1 - num2
   } else{
      comparador.maiorNumero = num2
      comparador.maiorDivisivelporMenor = ( num2 % num1 === 0)
      comparador.diferenca = num2 - num1
   }
   return comparador
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
  /* let objeto = filmeFavorito()
return 'Venha assistir ao filme ${objeto.nome), de ${objeto.ano} dirigido por ${objeto.diretor} e estrelado por ${objeto.atores[0]} ${objeto.atores[1]}, ${objeto.atores[2]'}
}*/

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 const dataHoje = new Date (2021, 4 , 30).getMinutes()

 consultasData.forEach((valor)=>{
    valor.dataDaConsulta = new Date(valo.dataDaConsulta).getMinutes() - dataHoje
 })
 const consultasOrdenadasDatas = consultasData.sort((a,b) => a.dataDaConsulta - b.dataDaConsulta)
console.log(consultasOrdenadasDatas)
return consultasOrdenadasDatas
}


//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

//function atualizaSaldo() {
  // implemente sua lógica aqui

}