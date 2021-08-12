// Exercício 1

// a) Salt é uma string aleatória que  mistura a senha antes do hash para torná-la mais segura e round é uma forma de tornar o algoritmo mais lento para dificultar ataques de força bruta. O valor padrão do round/cost da maioria das libs é 12 e eu usei 12 também porque acredito que seja o suficiente para manter o algoritmo seguro e não tão lento.

// Exercício 2

// a) Deve ser modificado primeiro o endpoint de cadastro e depois o de login. Pois o dado sera salvo criptografados e no login sera possivel a comparacao do hash que esta no banco.

// d)  endpoint profile não precise ser atualizado porque ele precisa somente do token da sessão e não a senha criptografada.




