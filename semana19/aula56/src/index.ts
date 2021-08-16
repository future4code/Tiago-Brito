import app from "./app"

import signup from './endpoints/signup'
import { login } from "./endpoints/login"
import { profile } from "./endpoints/profile"

app.post('/user/login', login);
app.post('/user/signup', signup)

app.get("/user/profile", profile)