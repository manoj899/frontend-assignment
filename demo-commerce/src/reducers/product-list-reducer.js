import { PRODUCT_LIST_GET_DATA } from "../actions/types";

const INITIAL_STATE = {
    data: [],
    total_page: 1
};

const ProductListReducer = (state = INITIAL_STATE, action) => {
    let newState = Object.assign({}, state);

    if (action.type === PRODUCT_LIST_GET_DATA) {
        newState.data = action.data;
        newState.total_page = Math.ceil((action.data.length - 1) / 10);

        return newState;
    }

    return state;
};

export default ProductListReducer;