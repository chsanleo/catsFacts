import axios from 'axios';

import APIs from '../config/api';

export const factsCatRepository = {
    getFactsCat
};

let baseUrl = APIs.FACTSCAT_API+'/facts';

async function getFactsCat() {
    try {
        const res = await axios.get(baseUrl);
        return res.data;
    }
    catch (error) {
        throw Error("Error connect API FactCats");
    }
};
