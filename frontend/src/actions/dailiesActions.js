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


export const getDailies = () => dispatch => {

    let userData = {
        userId
            :
            "zezeze2",
        "date"
            :
            "2222-02-01T00:00:00.000+00:00"
    }
    axios
        .post("/dailies/read", userData)
        .then(res => {
            dispatch(setDailies(res.data));
        })
       .catch(err => err.response.data)
};

export const setDailies = dailies => {
    return {
      type: SET_CURRENT_DAILIES,
      payload: dailies
    };
  };

export const addDaily = (daily) => {

    return {
        type: SET_CURRENT_DAILIES,
        payload: daily
    };
};