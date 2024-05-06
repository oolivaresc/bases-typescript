"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
//Factory function, función que regresa una función
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// module.exports = {
//     buildMakePerson,
// }
