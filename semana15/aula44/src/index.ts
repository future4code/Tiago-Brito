import express, { Request, Response } from 'express'
import cors from 'cors'
import { users, user } from "./users";

const app = express();

app.use(express.json());
app.use(cors());

/* Exe 1
a) Método: GET
b)"/users". */

app.get("/users", (req: Request, res: Response) => {

  res.status(200).send(users);
});

// Exercício 2
// a. Pela url, porque é muito mais simples
// b. Sim, checando se o resultado do filtro tem items, se não tiver, o tipo é inválido
app.get("/users/:type", (req: Request, res: Response) => {

  try {

      const type = req.params.type
      const result: user[] = users.filter(user => user.type.toLowerCase() === type.toLowerCase())

      if (result.length === 0) { throw new Error("Type Not Found") }

      res.status(200).send(result)
  }
  catch (error) {

      res.send(error.message)
  }
})


// Exercício 3
// a. GET

app.get("/user/:name", (req: Request, res: Response) => {

  try {
      const name = req.params.name
      const user = users.find(user => user.name.toLocaleLowerCase() === name.toLocaleLowerCase())

      if (!user) { throw new Error("User Not Found") }

      res.status(200).send(user)
  }
  catch (error) {
      res.send(error.message)
  }
})

// Exercício 4
//a. Nenhuma mudança
//b. Não, porque é melhor usar PUT quando for modificar algo já existente

app.post("/users/add", (req: Request, res: Response) => {

  const body = req.body
  users.push(body)
  res.status(200).send("Sucess")
})

app.listen(3003, () => {
  console.log("Server is running at port http://localhost:3003");
});
