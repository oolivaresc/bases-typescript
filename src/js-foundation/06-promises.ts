import {httpClient as http} from '../plugins'
// const {http} = require('../plugins')

export const getPokemonById = async(id: string|number): Promise<any> => {

    //Fetch usando plugin
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    return pokemon;

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
}

// module.exports = getPokemonById;