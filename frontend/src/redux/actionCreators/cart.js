import { CART } from "../actionTypes";

export const addItem = (event, seat, price) => ({
  type: CART.ADD_ITEM,
  payload: {
    ...event,
    seat,
    price,
  },
  meta: {
    type: "ticket",
  },
});

export const removeItem = (event, seat) => ({
  type: CART.REMOVE_ITEM,
  payload: {
    ...event,
    seat,
  },
});
