import { Request, Response } from "express";

import { generateId} from "../services/generateId"
import createUser from "../data/createUser";
import { generateToken } from "../services/generateToken";

const signup = async (req: Request, res: Response) => {
  try {

    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }
 
    const userData:any = {
      
      email: req.body.email,
      password: req.body.password,
    };
    console.log(userData)

    const id = generateId();
    console.log(id)
  
    await createUser(id, userData.email, userData.password);

  const token = generateToken({
      id,
    });
    console.log(token)

    res.status(200).send({
      token,
    });
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
}
export default signup