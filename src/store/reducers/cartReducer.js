import {ADD_DISH, GET_TOTAL, REMOVE_DISH} from "../actions/actionTypes";


const initialState = {
  orders: [],
  dishes: {
    plov: 0,
    shakarap: 0,
    bread: 0,
  },
  deliveryPrice: 150,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type){
    case GET_TOTAL:
      return {
        ...state,
        totalPrice: state.deliveryPrice + action.orderSum,
      };
    case ADD_DISH:
      return {
        ...state,
        dishes: {
          ...state.dishes,
          [action.dishName]: state.dishes[action.dishName] + 1,
        }
      };
    case REMOVE_DISH:
      if(state.dishes[action.dishName] === 0){
        return state;
      }
      return{
        ...state,
        dishes: {
          ...state.dishes,
          [action.dishName]: state.dishes[action.dishName] - 1,
        }
      };
    default:
      return state
  }
};



export default cartReducer