"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCountryById = void 0;
const data_1 = require("../data");
const postCountryById = (req, res) => {
    const { name, capital } = req.body;
    const data = { name, capital };
    console.log(req.body);
    const result = data_1.countries.find((country) => country.id === Number(req.params.id));
    const index = data_1.countries.findIndex((country) => country.id === Number(req.params.id));
    console.log(result);
    const bananinha = {
        id: result === null || result === void 0 ? void 0 : result.id,
        name: data.name,
        capital: data.capital,
        continent: result === null || result === void 0 ? void 0 : result.continent,
    };
    data_1.countries[index].name = name;
    data_1.countries[index].capital = capital;
    console.log(bananinha);
    res.status(200).send(bananinha);
};
exports.postCountryById = postCountryById;
//# sourceMappingURL=postCountryById.js.map