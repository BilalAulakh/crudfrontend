import {
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
} from "./ActionType";

export const initialState = {
  product: {
    data: [],
    dataFetched: false,
    isLoading: false,
    iserror: false,
  },
};

const authReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT_LOADING:
      return {
        ...state,
        product: {
          ...state.product,
          isLoading: true,
        },
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        product: {
          isLoading: false,
          error: null,
          data: [...state.product.data, action.payload],
        },
      };

    case ADD_PRODUCT_FAILED:
      return {
        ...state,

        product: {
          ...state.product,
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
export default authReducer;
