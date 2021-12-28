import {
    SET_CURRENT_DAILIES,
    GET_DAILIES
} from "../actions/types";

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
                dailies: action.payload
            };
        default:
            return state;
    }
}