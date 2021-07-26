import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body;
        let errorCode: number = 400;
        const newUser = {
            id: Date.now().toString(),
            name,
            nickname,
            email
        };
        if (!name || !nickname || !email) {
            errorCode = 422;
            throw new Error("Please check the fields!");
        }

        await connection("Users").insert(newUser)

        res.status(200).send("dados enviados");
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
});


const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Users WHERE id = ${id}
     `);
    return result[0][0];
};

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        res.status(200).send(user);
    } catch (err: any) {
        res.status(500).send({
            message: err.message,
        });
    }
});



app.put("/user/edit/:id", async (req, res) => {
    try {
        await connection("Users")
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
            })
            .where({ id: req.params.id });

        res.status(200).send("dados atualizados");
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message);
    }
});



app.post("/task", async ( req: Request,   res: Response )=>{
    let errorCode = 400
    try{
    const { title, description, status, dateAsString, creatorUserId } = req.body
    const [day, month, year] = dateAsString.split("/")
    const limitDate: Date = new Date(`${year}/${month}/${day}`)
    const newTask ={
        id: Date.now().toString(),
        title, 
        description, 
        limitDate,
        status, 
        creatorUserId 
      };

    if ( !title && !description && !status && !limitDate && !creatorUserId  ){
        errorCode = 422;
        throw new Error("Please check the fields!");
      }

      await connection("Task").insert(newTask)

       res.status(201).send("Sucess!");
    } catch (error:any) {
      res.status(400).send(error.sqlMessage || error.message);
    }
  });

  export const getTaskById =  async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
        SELECT Task.id, title, description, limitDate, creatorUserId, nickname  
        FROM Task 
        JOIN Users ON creatorUserId = Users.id
        WHERE Task.id = ${req.params.id}
        `)

        res.status(200).send(result[0])

    } catch (err:any) {
        res.status(400).send({
            message: err.message
        })
    }




