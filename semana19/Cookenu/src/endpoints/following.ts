import { UserData } from "../data/UserData";
import { Request, Response } from "express";
import { Authentication } from "../services/Authentication";
import { FollowerData } from "../data/FollowerData";


const following = async (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const token = req.headers.authorization as string;

        const authenticationData = new Authentication().getData(token);

        const id_user = authenticationData.id

        const user = new FollowerData()
        const following = await user.checkFollowing(id_user);

        console.log(`retorno`, following)


        res.status(200).send(following);

    } catch (err: any) {

        res.status(errorCode).send({ message: err.sqlMessage || err.message });
    }
}
export default following