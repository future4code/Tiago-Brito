import connection from '../connection'

const userTableName = "users_auth";

export class User {
createUser = async (id: string, email: string, password: string) => {
    await connection
      .insert({
        id,
        email,
        password,
      })
      .into(userTableName);
  };

  getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("users_auth" )
      .where({ email });
 
    return result[0];
   }

   getUserById= async (id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("users_auth")
      .where({ id });

    return result[0];
  }




} 