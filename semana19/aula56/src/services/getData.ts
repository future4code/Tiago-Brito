import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, "palavra" as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
export default getData