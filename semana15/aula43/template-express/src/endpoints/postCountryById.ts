import { Request, Response } from "express";
import { countries } from "../data";
import { country } from "../types";

export const postCountryById = (req: Request, res: Response): void => {
  const { name, capital } = req.body;
  const data = { name, capital };
  console.log(req.body);

  const result: country | undefined = countries.find(
    (country) => country.id === Number(req.params.id)
  );

  console.log(result)

  const alterar = {
    // id: result?.id,
    name: data.name,
    capital: data.capital,
    // continent: result?.continent,
  };

  console.log(alterar);
  res.status(200).send(alterar);
};