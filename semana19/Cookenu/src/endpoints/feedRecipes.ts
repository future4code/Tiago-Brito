import { Request, Response } from "express";
import { FollowerData } from "../data/FollowerData";
import { RecipeData } from "../data/RecipeData";
import { UserData } from "../data/UserData";
import { Authentication } from "../services/Authentication";
import { toModelRecipe } from "../types";

const feedRecipes = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {

        const token = req.headers.authorization as string;

        const authenticationData = new Authentication().getData(token);
        console.log(`sim`,authenticationData)
        //se este token retornar o id da pessoa que segue o id do params pode liberar o perfil .. 
        //buscar na tabela join se o user do token tem o seguidor que ele procura o id
        if (!token){
            res.statusCode = 422
            throw "'token' é obrigatório"
        }
        if(authenticationData){

   //pegar id do user_following do retorno da função que tem join

   const id_user = authenticationData.id

         const user = new FollowerData()
         const following = await user.checkFollowing(id_user);
         console.log(`pegar os ids dos following`,following[0].id_following)

        const recipe = new RecipeData()
        const getAll = await recipe.getAll(following[0].id_following)
        const feedList = getAll.map(toModelRecipe)
        console.log(feedList)

        if (!getAll){
            throw new Error("nenhuma receita cadastrada")
        }

        res.status(200).send(getAll)
    }

    } catch (err:any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message });
      }

}

export default feedRecipes 