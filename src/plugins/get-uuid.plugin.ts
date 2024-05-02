import {v4 as uuidv4} from 'uuid';
//Desenstructura y renombra v4: uuidv4
//const { v4: uuidv4 } = require('uuid');

export const getUUID = () => {
    return uuidv4();
}

// module.exports = {
//     getUUID,
// }