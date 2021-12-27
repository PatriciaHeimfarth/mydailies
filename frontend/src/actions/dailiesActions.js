import axios from "axios";
import {
    GET_ERRORS,
    SET_CURRENT_DAILIES
} from "./types";


export const storeDailies = (dailies) => dispatch => {

    axios
        .post("/dailies/store", dailies)
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setDailies = (dailies) => {
    return {
        type: SET_CURRENT_DAILIES,
        payload: dailies
    };
};