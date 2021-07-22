### Exercício 1

-- A) 
Uma chave estrangeira ou foreigner key, é uma coluna que referencia a chave primária de outra tabela, mantendo ela como referencia para realizar operações como join posteriormente.

-- B)
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES('002', 'Não gostei do filme', 3, '003');

-- C)
INSERT INTO Rating(id, comment, rate, movie_id)
VALUES('003', 'detestei o filme', 5, '005');

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`paiva-2125821-tiago-brito`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.141 sec
-- Nao foi possivel criar a linha na tabela por nao haver um id correto para um filme.

-- D)
ALTER TABLE Movie
DROP COLUMN rating;

-- E)
DELETE from Movie WHERE id=002;

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`paiva-2125821-tiago-brito`.
-- `MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	
-- Nao foi possivel apagar o filme com avaliacao porque ele possui uma referencia em outra tabela, primeiro e preciso apagar a referencia.
 
  
 ### Exercício 2

-- a) Essa tabela é uma tabela de junção, ela é uma tabela responsáve por fazer a relação N:M e ela possui 2 
-- foreigner keys uma para tabela movies e outra para tabela actors.

-- b)
INSERT INTO MovieCast(movie_id, actor_id) 
VALUES( "002", "004" );

-- C)
INSERT INTO MovieCast(movie_id, actor_id) 
VALUES( "005", "003" );

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`paiva-2125821-tiago-brito`.`MovieCast`, 
-- CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Nao foi possivel criar a relacao porque a chave nao identificou na tabela de atores o id informado query.alter

-- D)
DELETE from Actor WHERE id=004;

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`paiva-2125821-tiago-brito`.
-- `MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	
-- Nao pode ser deletado porque existe uma chave estrangeira associada a ele em outra tabela.


 ### Exercício 3
 
 -- A)
 -- Na query em questao ela esta juntando todos os registros da tabela Movie que tiverem um registro de rating associado a elas com os respectivos IDs, aos dados da tabela Rating e seleciona tadas as colunas das duas tabelas.
  
-- B)
Select title, Movie_id, rate from Movie inner join Rating On Movie.id = Rating.movie_id;