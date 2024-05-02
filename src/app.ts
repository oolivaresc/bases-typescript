import {buildLogger} from './plugins/logger.plugin';
import {getPokemonById} from './js-foundation/06-promises';
// const {buildLogger} = require('./plugins');
// const getPokemonById = require('./js-foundation/06-promises.js');

const info = getPokemonById(1)
    .then((pokemon) => {
        console.log(pokemon.name)
    })
    .catch((err) => console.log(`Por favor intente nuevamente: ${err}`)) 
    .finally(() => console.log('Finalmente')) 

const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Esto es algo malo');
export const name: string = 'Fernando';
console.log('Hola mundo')