import { ADD_FACTCAT } from '../types/factsCat.js';

const initialState = {
    factsCatList: { }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FACTCAT:
            return {
                ...state,
                factsCatList: action.payload
            };
        default:
            return state;
    }
};

/*
[
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "_id": "58e008800aac31001185ed07",
        "user": "58e007480aac31001185ecef",
        "text": "Wikipedia has a recording of a cat meowing, because why not?",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "type": "cat",
        "createdAt": "2018-03-06T21:20:03.505Z",
        "deleted": false,
        "used": false
    },
    ...
]
*/