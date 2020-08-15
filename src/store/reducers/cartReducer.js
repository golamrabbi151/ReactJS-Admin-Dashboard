
export default function (state = {}, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: action.payload.cartItems };
    case 'REMOVE_FROM_CART':
      return { ...state, items: action.payload.cartItems };
    case 'ADJUST_USER_CART':
      return { ...state, items: action.payload.cartItems };

    default:
      return state;
  }
}
