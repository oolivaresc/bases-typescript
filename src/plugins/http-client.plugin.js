const axios = require('axios');

const httpClientPlugin = {
    get: async(url) => {
        const {data} = await axios.get(url)
        return data;
        //const response = await fetch(url);
        //return await response.json();
    },
    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url) => {},
}

module.exports = {
    //Renombrar, nombre más sencillo
    http: httpClientPlugin,
}