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
            const items = state.items.filter(value => {
                if (this.amountLeft === 0) return true;
                if (value.event !== action.payload.event) return true;
                if (value.area !== action.payload.area) return true;
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
