import { combineReducers } from 'redux';

import jokesReducer from './jokes.js';
import factsCatReducer from './factsCat.js';

const reducer = combineReducers({
    jokes: jokesReducer, 
    factsCat: factsCatReducer,
});
export default reducer;