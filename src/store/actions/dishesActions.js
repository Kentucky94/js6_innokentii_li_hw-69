import {GET_DISHES_SUCCESS, GET_DISHES_FAILURE, GET_DISHES_REQUEST} from "./actionTypes";
import axiosOrders from "../../axiosOrders";

export const getDishesRequest = () => ({type: GET_DISHES_REQUEST});
export const getDishesSuccess = dishes => ({type: GET_DISHES_SUCCESS, dishes});
export const getDishesFailure = error => ({type: GET_DISHES_FAILURE, error});

export const getDishes = () => {
  return async (dispatch) => {
    try {
      dispatch(getDishesRequest());
      const response = await axiosOrders.get('/dishes.json');

      const dishes = Object.keys(response.data).map(key => response.data[key]);

      dispatch(getDishesSuccess(dishes));
    }catch (e) {
      dispatch(getDishesFailure(e))
    }
  }
};