import {ADD_DISH, GET_TOTAL, POST_ORDER_SUCCESS, POST_ORDER_FAILURE, POST_ORDER_REQUEST, REMOVE_DISH} from "./actionTypes";
import axiosOrders from "../../axiosOrders";

export const addDish = dishName => ({type: ADD_DISH, dishName});
export const removeDish = dishName => ({type: REMOVE_DISH, dishName});

export const getTotal = orderSum => ({type: GET_TOTAL, orderSum});

export const postOrderRequest = () => ({type: POST_ORDER_REQUEST});
export const postOrderSuccess = orderData => ({type: POST_ORDER_SUCCESS, orderData});
export const postOrderFailure = error => ({type: POST_ORDER_FAILURE});

export const postOrder = (dishesData, customerData) => {
  return async dispatch => {
    try {
      dispatch(postOrderRequest());

      const orderData = {...dishesData, ...customerData};

      await axiosOrders.post('/orders.json', orderData);

      dispatch(postOrderSuccess(orderData))
    }catch (e){
      postOrderFailure(e)
    }
  }
};

