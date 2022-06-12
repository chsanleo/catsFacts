import { ADD_JOKES } from '../types/jokes.js';

const initialState = {
    jokesList: { }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_JOKES:
            return {
                ...state,
                jokesList: action.payload
            };
        default:
            return state;
    }
};

/*
{
    "error": false,
    "amount": 3,
    "jokes": [
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "Why are cats so good at video games?",
            "delivery": "They have nine lives.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 255,
            "safe": true,
            "lang": "en"
        },
        ...
    }
*/