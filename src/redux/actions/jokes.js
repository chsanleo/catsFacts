import { ADD_JOKES } from "../types/jokes.js";
import store from '../store.js';

export const addJokes = async (events) => {
    try {
        store.dispatch({
            type: ADD_JOKES,
            payload: events
        });
    } catch (error) {
        console.error(error);
    }
};
export const delJokes = async () => {
    try {
        store.dispatch({
            type: ADD_JOKES,
            payload: { }
        });
    } catch (error) {
        console.error(error);
    }
};