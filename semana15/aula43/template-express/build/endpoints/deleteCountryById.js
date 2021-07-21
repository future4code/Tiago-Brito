"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCountryById = void 0;
const data_1 = require("../data");
const deleteCountryById = (req, res) => {
    try {
        if (req.headers.authorization !== "tokenabc123") {
            res.statusCode = 401;
            throw new Error("Faltou o token");
        }
        const index = data_1.countries.findIndex(country => country.id === Number(req.params.id));
        if (index === -1) {
            res.statusCode = 404;
            throw new Error("Não encontrado");
        }
        data_1.countries.splice(index, 1);
        res.status(204).end();
    }
    catch (error) {
        if (res.statusCode === 200) {
            res.status(500).end();
        }
        else {
            res.statusMessage = error.message;
            res.end();
        }
    }
};
exports.deleteCountryById = deleteCountryById;
//# sourceMappingURL=deleteCountryById.js.map