import {GET_DISHES_SUCCESS} from "../actions/actionTypes";

const initialState = {
  dishes: [],
  plov: 0,
  shakarap: 0,
  bread: 0,
};

const dishesReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_DISHES_SUCCESS:
      return {
        ...state,
        dishes: action.dishes,
      };
    default:
      return state
  }
};



export default dishesReducer