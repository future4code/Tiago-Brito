import { app } from "./app";
import  {getAllUsers} from "./endpoints/getAllUsers";
import {createUser}  from "./endpoints/createUser";

app.get("/users", getAllUsers)



app.post("/user", createUser)