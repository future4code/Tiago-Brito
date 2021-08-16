import { Request, Response } from "express";
import { RecipeData } from "../data/RecipeData";
import { Authentication } from "../services/Authentication";

const getFeed = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization as string;

        const authenticationData = new Authentication().getData(token);
        console.log(`sim`,authenticationData)
        //se este token retornar o id da pessoa que segue o id do params pode liberar o perfil .. 
        //buscar na tabela join se o user do token tem o seguidor que ele procura o id
        if (!authenticationData){
            res.statusCode = 422
            throw "'token', ausente, ou inválido"
        }

        const feedData = new RecipeData()
        const getFeed = await feedData.feedRecipes(authenticationData.id)
        console.log(getFeed)
        if (!getFeed){
            throw new Error("nenhum usuario encontrado com esse id")
        }
        const foundFeed = getFeed
        res.status(200).send(getFeed)

    } catch (err:any) {
        res.status(400).send({
          message: err.message,
        });
      }

}
export default getFeed 