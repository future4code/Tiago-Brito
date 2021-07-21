"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCountries = void 0;
const data_1 = require("../data");
const getAllCountries = (req, res) => {
    console.log(req.query);
    res.statusMessage = "Mensagem customizada no cabeçalho da resposta";
    res.send(data_1.countries.map((country) => {
        return ({ country: country.name,
            id: country.id,
        });
    }));
};
exports.getAllCountries = getAllCountries;
//# sourceMappingURL=getAllCountries.js.map