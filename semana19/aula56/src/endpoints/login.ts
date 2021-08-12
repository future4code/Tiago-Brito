import { Request, Response } from "express";
import { User } from "../data/User";
import { generateToken } from "../services/generateToken";
import { HashManager} from "../services/hashManager";


export async function login(req: Request, res: Response){
    try {
        // Item b. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }
    
        const userData = {
          email: req.body.email,
          password: req.body.password,
        };
    
    
        const user = await new User().getUserByEmail(userData.email);
    
        const hm = new HashManager();
        const hashcompare = await hm.compare(userData.password, user.password);

        if (!hashcompare) {
          throw new Error("Invalid password");
        }
    
        
        const token = generateToken({
          id: user.id,
        });
    
        res.status(200).send({
          token,
        });
      } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
    }


