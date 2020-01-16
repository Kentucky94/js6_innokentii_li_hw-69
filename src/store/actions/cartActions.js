import {ADD_DISH, GET_TOTAL, REMOVE_DISH} from "./actionTypes";

export const addDish = dishName => ({type: ADD_DISH, dishName});
export const removeDish = dishName => ({type: REMOVE_DISH, dishName});

export const getTotal = (orderSum) => ({type: GET_TOTAL, orderSum});