import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import {RecipeData} from "../data/RecipeData";
import { Authentication } from "../services/Authentication";
import { UserData } from "../data/UserData";
import getRecipeById from "./getRecipeById";
import getUserById from "./getRecipeById";

//import moment from 'moment';


export const updateRecipe = async(req: Request,res: Response): Promise<any> =>{
    try {
        if(!req.body.title){
            res.statusCode = 422
            throw new Error("Título não preenchido")
        }

        if(!req.body.description){
            res.statusCode = 422
            throw new Error("Descrição não preenchida")
        }

        const token = req.headers.authorization as string
        const authenticationData = new Authentication().getData(token);
        const user_id = await getUserById()
        const recipe = await getRecipeById(req.params.id)

        if (recipe.user_id!==user_id.id) {
            res.statusCode = 422
            throw new Error("Não é permitido alterar a receita de outro usuário")
        }

        await updateRecipe(
            req.params.id,
            req.body.title,
            req.body.description,
        )

        res.status(200).send("Receita atualizada com sucesso")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

