import axios from "axios";

import { PRODUCT_LIST_GET_DATA } from "./types";

export const ProductListGetData = () => (dispatch, getState) => {
    return axios.get('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json')
        .then((res) => {
            // handle success
            dispatch({ type: PRODUCT_LIST_GET_DATA, data: res.data });
            console.log(res);
        })
        .catch((err) => {
            // handle error
            console.log(err);
            return Promise.reject();
        });
};