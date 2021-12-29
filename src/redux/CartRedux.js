import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: [],
      cartTotalQuantity: 0,
      cartTotalAmount: 0,
    },
    reducers: {
      addToCart(state, action){
          const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
          if(itemIndex >=0){
              state.cartItems[itemIndex].cartQuantity +=1;
          }else{
            const tempProduct = {...action.payload, cartQuantity: 1}
            state.cartItems.push(tempProduct);  
          }
          state.cartTotalQuantity = state.cartItems.length;
          state.cartTotalAmount = state.cartItems.reduce((partial_sum, item) => partial_sum + item.cartQuantity * item.price, 0)
      },
      decreaseCart(state, action){
        const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
        if(itemIndex >=0){
          if(state.cartItems[itemIndex].cartQuantity > 1){
            state.cartItems[itemIndex].cartQuantity -=1;
          }else{
            state.cartItems.splice(itemIndex, 1);
          }
      }
      state.cartTotalQuantity = state.cartItems.length;
          state.cartTotalAmount = state.cartItems.reduce((partial_sum, item) => partial_sum + item.cartQuantity * item.price, 0)
      }
    }
  })

  export const { addToCart, decreaseCart } = cartSlice.actions

  export const selectCart = state => state.cart.cartItems;
  export const selectCartTotalQuantity = state => state.cart.cartTotalQuantity;

  export default cartSlice.reducer;