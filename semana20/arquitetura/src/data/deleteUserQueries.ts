import connection from "./connection";

// DELETE USER
export const deleteUser = async (id: string): Promise<any> => {
   await connection("users").delete(id).where("id", id);
 };