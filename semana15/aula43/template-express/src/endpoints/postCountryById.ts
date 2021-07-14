import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const postCountryById= (
   req: Request,
   res: Response
): void => {
   const { name, capital } = req.body;
   let errorCode: number = 400;
 
   try {
     const countryIndex: number = countries.findIndex(
       (country) => country.id === Number(req.params.id)
     );
 
     if (countryIndex === -1) {
       errorCode = 404;
       throw new Error("Id doesn't exist");
     }
 
     if (!name && !capital) {
       throw new Error("Invalid Parameters");
     }
 
     if (name) {
       countries[countryIndex].name = name;
     }
 
     if (capital) {
       countries[countryIndex].capital = capital;
     }
     res.status(200).send("Country successfully updated");
   } catch (error) {
     res.status(errorCode).send(error.message);
   }
 };