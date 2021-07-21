"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryByFilter = void 0;
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
const getCountryByFilter = (req, res) => {
    let result = data_1.countries;
    if (req.query.name) {
        result = result.filter(country => country.name.includes(req.query.name));
    }
    if (req.query.capital) {
        result = result.filter(country => country.capital.includes(req.query.capital));
    }
    if (req.query.continent) {
        result = result.filter(country => country.continent.includes(req.query.continent));
    }
    if (result) {
        res.status(200).send(result);
    }
    else {
        res.status(404).send("Not found");
    }
};
exports.getCountryByFilter = getCountryByFilter;
//# sourceMappingURL=getCountryByFilter.js.map