import { combineReducers } from 'redux';

const initProducts = {
    numberCart:0,
    cart:[],
    products:["Shoe","Belt","Glasses","Wallet"],
}

function cartItems(state = initProducts , action){
    
    // console.log(state)
    // console.log(action.payload);

    switch(action.type){
        case 'ADD_PRODUCT':
            return{
                ...state,   
                _products: state.cart.push(action.payload.product),
                numberCart: state.cart.length
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    _cartItems:cartItems,
});

export default rootReducer;