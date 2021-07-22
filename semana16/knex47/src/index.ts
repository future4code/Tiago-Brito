import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";


const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE name = '${name}'
    `);
  return result[0];
};

getActorByName("Indio")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const getGenderAmount = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT (*) AS amount
   FROM Actor
   WHERE gender = '${gender}'
   `);
  const amount = result[0][0];
  return amount;
};

getGenderAmount("female")
  .then((amount) => {
    console.log(amount);
  })
  .catch((err) => {
    console.log(err);
  });

const updateActor = async (id: string, salary: number): Promise<any> => {
  const result = await connection("Actor").update({
    salary: salary,
  }).where("id", id);

};
updateActor("002", 2000)
  .then(result => {
    console.log(result)
    console.log("deu certo!")
  })
  .catch(err => {
    console.log(err)
    console.log("deu erradooooo")
  });



const deleteActor = async (id: string): Promise<void> => {
  const result = await connection("Actor")
    .delete()
    .where("id", id);
};

deleteActor("005")
  .then(result => {
    console.log(result)
    console.log("deletado com sucesso")
  })
  .catch(err => {
    console.log(err)
  });


const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
avgSalary("male")
  .then(result => {
    console.log(result)
    console.log("média salariaaal")
  })
  .catch(err => {
    console.log(err)
  });



const getActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT Count(*) FROM Actor WHERE gender = '${gender}'
     `);
  return result[0][0];
};

app.get("/actor", async (req: Request, res: Response) => {
  try {

    const actor = await getActorByGender("gender");
    res.status(200).send(actor);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});


const updateSalary = async (id: string,  salary: string,) => {
  const result  = await 
      connection("Actor").insert({id, salary})
};

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await updateSalary(
      req.body.id,
      req.body.salary,

    );

    res.status(200).send();
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});


const deletActor = async (id: string): Promise<void> => {
   await connection("Actor")
    .delete()
    .where("id", id);
};

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deletActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});