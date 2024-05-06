"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const templateExports = require('./js-foundation/01-template');
//const {emailTemplate} = require('./js-foundation/01-template');
//require('./js-foundation/02-destructuring');
//const {getUserById} = require('./js-foundation/03-callbacks');
// const {buildMakePerson} = require('./js-foundation/05.2-factory');
// const {getAge, getUUID} = require('./plugins');
const _05_2_factory_1 = require("./js-foundation/05.2-factory");
const plugins_1 = require("./plugins");
//const id = 1;
//const user = getUserById(id, (error, user) => {
//    if(error){
//        throw new Error('User not found with id', id);
//    }
//    console.log(user);
//});
//Inyección de dependencias
const makePerson = (0, _05_2_factory_1.buildMakePerson)({ getAge: plugins_1.getAge, getUUID: plugins_1.getUUID });
const obj = {
    name: 'John',
    birthdate: '1985-10-21'
};
const john = makePerson(obj);
console.log(john);
