import { Request, Response } from "express"
import { countries } from "../data"
import {country} from '../types'

export const getAllCountries = (
   req: Request,
   res: Response
): void => {

   console.log( req.query)
   res.statusMessage = "Mensagem customizada no cabeçalho da resposta"

      res.send(countries.map((country:country) => {
      return  ({country:country.name, 
         id: country.id,

        }
      )
   }))
}