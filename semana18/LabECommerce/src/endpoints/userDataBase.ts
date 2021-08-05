import { BaseDatabase } from "../data/BaseDatabase";

export default class UserDatabase extends BaseDatabase {

    constructor(){
        super()
    }

    public getUser = async (id: number, email:string, name:string, age:number 

    ) =>{
        //com atributos estaticos, morre o this. Usamos
        //o nome da classe toda
        const result = await BaseDatabase.connection("labECommerce_user")
        
        .insert (id, email, name, age)
        const user = result

      return result;
    }

}