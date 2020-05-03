import {CART} from "../actionTypes";

const initialState = {
    items: [],
    buyPending: false,
    buyError: undefined,
    buySuccess: undefined
};

const cart = (state = initialState, action) => {
    switch (action.type) {
        case CART.ADD_ITEM: {
            const items = [...state.items];
            items.push(action.payload);
            return {...state, items};
        }
        case CART.REMOVE_ITEM: {
            // a function keyword needs to be used for this keyword to work
            const items = state.items.filter(function (value) {
                if (this.amountLeft === 0) return true;
                if (value._id !== action.payload._id) return true;
                if (value.seat !== action.payload.seat) return true;
                this.amountLeft = 0;
                return false;
            }, {amountLeft: 1});
            return {...state, items};
        }
        case CART.BUY_REQUEST:
            return {...state, buyPending: true};
        case CART.BUY_SUCCESS:
            return {...initialState, buySuccess: true};
        case CART.BUY_FAILURE:
            return {...state, buyPending: false, buyError: action.payload};
        default:
            return state;
    }
};

export default cart;
