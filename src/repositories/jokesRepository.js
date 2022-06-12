import axios from 'axios';
import APIs from '../config/api';
import PROPERTIES from '../config/properties.js';


export const jokesRepository = {
    getJokes
};

let baseUrl = APIs.JOKES_API + PROPERTIES.Jokes_Type + '?';

async function getJokes() {
    try {
        const res = await axios.get(baseUrl +'amount='+ PROPERTIES.Jokes_Amount);
        return res.data;
    }
    catch (error) {
        throw Error("Error connect API Jokes");
    }
};
