import {CART} from "../actionTypes";

export const addItem = (event, seat, price) => ({
    type: CART.ADD_ITEM,
    payload: {
        ...event,
        seat,
        price
    },
    meta: {
        type: "ticket"
    }
});
