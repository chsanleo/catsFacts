import { jokesRepository } from '../repositories/jokesRepository';
import { addJokes } from '../redux/actions/jokes.js';

export const jokesService ={
    getJokes
};

function getJokes(){
    jokesRepository.getJokes()
        .then(res => addJokes(res))
        .catch(error => console.log(error));
};