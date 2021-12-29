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
      }
    }
  })

  export const { addToCart } = cartSlice.actions

  export const selectCart = state => state.cart.cartItems;

  export default cartSlice.reducer;