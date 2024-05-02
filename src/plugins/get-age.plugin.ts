//import getAgePlugin from 'get-age';
//const getAgePlugin = require('get-age');

export const getAge = (birthdate: string) => {
    //return getAgePlugin(birthdate);
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}

// module.exports = {
//     getAge,
//}