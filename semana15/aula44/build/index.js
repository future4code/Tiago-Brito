"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./users");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get("/users", (req, res) => {
    res.status(200).send(users_1.users);
});
//# sourceMappingURL=index.js.map