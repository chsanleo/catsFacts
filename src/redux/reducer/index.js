import { combineReducers } from 'redux';

import jokesReducer from './jokes.js';

const reducer = combineReducers({
    jokes: jokesReducer, event: jokesReducer,
});
export default reducer;