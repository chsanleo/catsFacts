import { factsCatRepository } from '../repositories/factsCatRespository.js';
import { addfactsCat } from '../redux/actions/factsCat.js';

export const factsCatService ={
    getFactsCat
};

function getFactsCat(){
    factsCatRepository.getFactsCat()
        .then(res => addfactsCat(res))
        .catch(error => console.log(error));
};