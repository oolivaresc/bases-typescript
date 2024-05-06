"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("../plugins");
const buildPerson = ({ name, birthdate }) => {
    return {
        id: (0, plugins_1.getUUID)(),
        name: name,
        birthdate: birthdate,
        age: (0, plugins_1.getAge)(birthdate)
    };
};
const obj = {
    name: 'John',
    birthdate: '1985-10-21'
};
const john = buildPerson(obj);
console.log(john);
