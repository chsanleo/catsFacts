import axios from 'axios';
import PROPERTIES from '../config/properties.js';

export const jokesRepository = {
    getJokes
};

async function getJokes() {
    try {
        const res = await axios.get(PROPERTIES.Type+'?amount='+PROPERTIES.Amount);
        return res.data;
    }
    catch (error) {
        throw Error("Error back updateContactUs.");
    }
};
