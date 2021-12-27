import axios from "axios";
import {
    GET_ERRORS,
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