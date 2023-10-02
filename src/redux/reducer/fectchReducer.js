import { FETCHLOREM, RECEIVELOREM } from "../action/actionType";

const initialState = {
  content: '',
  isLoading: false,
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHLOREM:
      return { ...state, isLoading: true };
    case RECEIVELOREM:
      return { ...state, content: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default fetchReducer;
