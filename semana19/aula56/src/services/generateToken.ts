import { AuthenticationData } from "../types";

import * as jwt from "jsonwebtoken";

  const expiresIn = "10min";
  export const generateToken = (input: AuthenticationData): string =>{
    const token = jwt.sign(
      {
        id: input.id,
      },
  
      "palavra" as string,
      {
        expiresIn
      }
    );
    return token;
  }