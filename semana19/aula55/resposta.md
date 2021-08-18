// Exercício 1

// a) Em formato string podemos utilizar diferentes caracteres possibilitando uma senha mais forte.

// Exercício 2

// a) E mostrada uma conexao com o banco de dados e uma funcao para criar um usuario na tabela user.

// b) 
 CREATE TABLE users_auth (
      id INT NOT NULL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      nickname VARCHAR(50) NOT NULL,
      email VARCHAR(50) UNIQUE NOT NULL,
	  
    );


 // Exercício 3
 // a) as string diz para o código que o virá de process.env.JWT_KEY será sempre uma string.




 // Exercício 7
// a) As any e utilizado para indicar um formato desejado e com isso informar ao codigo como a informcao vai ser retornada.