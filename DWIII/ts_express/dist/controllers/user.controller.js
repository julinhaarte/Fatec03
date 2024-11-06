"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const getUser = (_request, response) => {
    const user = {
        id: 1,
        name: "João Pedro",
        age: 18
    };
    response.json(user);
};
exports.getUser = getUser;
