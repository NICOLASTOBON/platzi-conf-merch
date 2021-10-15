import { useReducer } from "react";
import initialState from "../initialState";

function stateReducer(state, action) {

  switch (action.type) {
    case 'ADD_TO_CART':
      return ({
        ...state,
        cart: [...state.cart, action.payload]
      });

    case 'REMOVE_FROM_CART':
      return ({
        ...state,
        cart: state.cart.filter(item => item.cartID !== action.payload.cartID)
      });

    case 'ADD_TO_BUYER':
      return ({
        ...state,
        buyer: [...state.buyer, action.payload]
      })

    case 'ADD_TO_ORDERS':
      return ({
        ...state,
        orders: [...state.orders, action.payload]
      })

    default:
    return state;
  }
}

function useInitialState() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return { state, dispatch }
}

export { useInitialState }