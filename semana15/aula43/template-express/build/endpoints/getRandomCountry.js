"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCountry = void 0;
const data_1 = require("../data");
const getRandomCountry = (req, res) => {
    const index = Math.floor(Math.random() * 190);
    const result = data_1.countries.find(country => country.id === index);
    console.log(index);
    if (result) {
        res.send(result);
    }
    else {
        res.statusCode = 404;
        res.end();
    }
};
exports.getRandomCountry = getRandomCountry;
//# sourceMappingURL=getRandomCountry.js.map