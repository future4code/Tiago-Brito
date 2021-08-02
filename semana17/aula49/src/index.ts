import { app } from "./app";
import { Request, Response } from "express"
import {connection}from "./data/connection"


//End 1
app.get("/users/", async (req: Request, res: Response) => {
    try {

        const name = req.query.name as string;

        const result = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio
        WHERE name LIKE "%${name}%";
        `)

      const userName = result[0];
     
      if(!userName.length){
        res.statusCode = 404
        throw new Error("erro1")
     }
        
        res.status(200).send(userName)
    } catch (error) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
})

//B)


const getUserByType = async  (type: string): Promise<any> => {
 
   
    const result = await connection.raw(`
    SELECT type
            FROM aula48_exercicio
            WHERE type LIKE "%${type}%";
     `);
    return result[0][0];
  };
  
  app.get("/users/:type", async (req: Request, res: Response) => {
    try {

        const type = req.params.type;
        const user = await getUserByType(type);
        res.status(200).send();
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
  });

  //End 2

  app.get("/users/search", async(req:Request, res:Response): Promise<void> => {
    try {
 
       const name = req.query.name as string 
       const type = req.query.type as string
       const orderBy = req.query.orderBy as string || "email"
       const orderType = req.query.orderType as string || "DESC"
 
 
       const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE name = "${name}" OR type = "${type}"
       ORDER BY ${orderBy} ${orderType.toUpperCase()};
       `);
 
       const order = result[0]
 
       if(!order.length){
          res.statusCode = 404
          throw new Error("Exercicio 2")
       }
       res.status(200).send(order)
    } catch (err) {
       console.log(err)
       res.send(err.message || err.sqlMessage)
    }
 }) 

   //End 3
   app.get("/users/all", async(req:Request, res:Response): Promise<void> => {
    try {
 
       const page = Number (req.query.page) || 1 
       const size = Number (req.query.size) || 5 
 
 
       const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       LIMIT 5
       OFFSET ${size * (page-1 )};
       `);
 
       const users = result[0]
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Exercicio 3")
       }
       res.status(200).send(users)
    } catch (err) {
       console.log(err)
       res.send(err.message || err.sqlMessage)
    }
 }) 

    //End 4 
    
  app.get("/users/general", async(req:Request, res:Response): Promise<void> => {
    try {
        const name = req.query.name as string 
        const type = req.query.type as string
        const orderBy = req.query.orderBy as string || "name"
        const orderType = req.query.orderType as string || "DESC"
       const page = Number (req.query.page) || 1 
       const size = Number (req.query.size) || 5 
 
    
       const result = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE name LIKE "%${name}%" OR type LIKE "%${type}%"
       ORDER BY ${orderBy} ${orderType.toUpperCase()}
       LIMIT 5
       OFFSET ${size * (page-1 )};
       `);
 
       const users = result[0]
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("Exercicio 4")
       }
       res.status(200).send(users)
    } catch (err) {
       console.log(err)
       res.send(err.message || err.sqlMessage)
    }
 }) 
