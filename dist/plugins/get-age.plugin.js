"use strict";
//import getAgePlugin from 'get-age';
//const getAgePlugin = require('get-age');
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    //return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
// module.exports = {
//     getAge,
//}
