"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const plugins_1 = require("../plugins");
// const {http} = require('../plugins')
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //Fetch usando plugin
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield plugins_1.httpClient.get(url);
        return pokemon;
    }
    catch (error) {
        throw `Pokemon not found with id: ${id}`;
    }
    //Fetch
    //const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    //const response = await fetch(url);
    //const pokemon = await response.json();
    //return pokemon;
    //Retornando promesa
    //return fetch(url)
    //    .then((response) => response.json())
    //.then(() => {throw new Error('Pokemon no existe')})
    //    .then((pokemon) => pokemon);
});
exports.getPokemonById = getPokemonById;
// module.exports = getPokemonById;
