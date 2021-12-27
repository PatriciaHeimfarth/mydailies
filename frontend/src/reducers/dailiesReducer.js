import {
    SET_CURRENT_DAILIES,
    GET_DAILIES
} from "../actions/types";
const isEmpty = require("is-empty");
const initialState = {

    dailies: {},

};
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_DAILIES:
            return {
                ...state,
              dailies: action.payload
            };
        case GET_DAILIES:
            return {
                ...state,
                dailies: {
                    "userId": "setdailies",
                    "date": "2222-02-01T00:00:00.000Z",
                    "dailies": [{
                        "type": "hj",

                        "amount": 13

                    }]

                }//action.payload
            };
        default:
            return state;
    }
}