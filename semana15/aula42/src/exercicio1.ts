// EXERCICIO 1

// a) 

//let minhaString: string = "4"

//  a variavel só aceita valores em string.

// b)

//let meuNumero: number | string = 6

// Para a variavel aceitar também string, é necessário colocar "number | string".

// c)

/*type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const Daniel: pessoa = {
    nome: "Daniel",
    idade: 31,
    corFavorita: "Azul"
 }
 
const Tiago: pessoa = {
    nome: "Tiago",
    idade: 33,
    corFavorita: "vermelho"
 }

 
const Carla: pessoa = {
    nome: "Carla",
    idade: 37,
    corFavorita: "preto"
 }*/

// d) Modificar o tipo do objeto para escolher apenas entre as cores do arco-íris.


enum COR_FAVORITA {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta",
}

type pessoa = {
    nome: string;
    idade: number;
    corFavorita: COR_FAVORITA;
};

const Daniel: pessoa = {
    nome: "Daniel",
    idade: 31,
    corFavorita: COR_FAVORITA.AZUL,
 };
 
const Tiago: pessoa = {
    nome: "Tiago",
    idade: 33,
    corFavorita: COR_FAVORITA.VERMELHO,
 };

 
const Carla: pessoa = {
    nome: "Carla",
    idade: 37,
    corFavorita: COR_FAVORITA.ANIL,
 };
