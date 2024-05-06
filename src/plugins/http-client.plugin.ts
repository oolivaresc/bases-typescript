import axios from 'axios';
//const axios = require('axios');

export const httpClientPlugin = {
    get: async(url: string) => {
        const {data} = await axios.get(url)
        return data;
        //const response = await fetch(url);
        //return await response.json();
    },
    post: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    put: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    delete: async(url: string) => {
        throw new Error('Not implemented');
    },
}

// module.exports = {
//     //Renombrar, nombre más sencillo
//     http: httpClientPlugin,
// }