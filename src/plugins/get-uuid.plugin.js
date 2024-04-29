//Desenstructura y renombra v4: uuidv4
const { v4: uuidv4 } = require('uuid');

const getUUID = () => {
    return uuidv4();
}

module.exports = {
    getUUID,
}