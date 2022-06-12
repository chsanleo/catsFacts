import { ADD_FACTCAT } from "../types/factsCat.js";
import store from '../store.js';

export const addfactsCat = async (events) => {
    try {
        store.dispatch({
            type: ADD_FACTCAT,
            payload: events
        });
    } catch (error) {
        console.error(error);
    }
};
export const delFactsCat = async () => {
    try {
        store.dispatch({
            type: ADD_FACTCAT,
            payload: {}
        });
    } catch (error) {
        console.error(error);
    }
};