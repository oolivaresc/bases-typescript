"use strict";
//console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { SHELL, LOGNAME } = process.env;
//console.table({SHELL, LOGNAME});
exports.characters = ['Flash', 'Superman', 'Batman'];
const [_, __, batman] = exports.characters;
//console.log(batman);
