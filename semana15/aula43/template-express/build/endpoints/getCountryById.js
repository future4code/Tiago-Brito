"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryById = void 0;
const data_1 = require("../data");
const getCountryById = (req, res) => {
    const result = data_1.countries.find(country => country.id.toString() === req.params.id);
    if (result) {
        res.send(result);
    }
    else {
        res.statusCode = 404;
        res.end();
    }
};
exports.getCountryById = getCountryById;
//# sourceMappingURL=getCountryById.js.map