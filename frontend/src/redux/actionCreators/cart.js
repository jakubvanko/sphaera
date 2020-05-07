import { CART } from "../actionTypes";

export const addItem = (event, area, price) => ({
  type: CART.ADD_ITEM,
  payload: {
    ...event,
    area,
    price,
  },
  meta: {
    type: "ticket",
  },
});

export const removeItem = (event, area) => ({
  type: CART.REMOVE_ITEM,
  payload: {
    ...event,
    area,
  },
});

export const buyRequest = (items) => ({
  type: CART.BUY_REQUEST,
  payload: items,
});

export const resetResults = () => ({
  type: CART.RESET_RESULTS,
});
