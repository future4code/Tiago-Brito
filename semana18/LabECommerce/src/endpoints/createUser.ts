import { Request, Response } from "express";
import { connection } from "../data/connection";
import { user} from "../types";



export default async function createUser {
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { id, name, email, age } = req.body

      if (!id || !name || !email || !age ) {
         res.statusCode = 422
         throw "'id', 'name', 'email' e 'birthdate' são obrigatórios"
      }
 
  
    const newStudent: User = { id, name, email, age }

      await connection('').insert(newUser)

      res.status(201).send("Novo usuario inserido")

   } catch (error:any) {

      if (typeof error === "string") {

         res.send(error)
      } else {

         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}