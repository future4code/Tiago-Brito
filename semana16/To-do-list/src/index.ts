import connection from "./connection";

const createUser = async (
    name: string,
    nickname: string,
    email: string
  ): Promise<any> => {
    await connection("ToDoListUser").insert({
      name,
      nickname,
      email,
    });
  };