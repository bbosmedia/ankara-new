import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cartItems: localStorage.getItem('cartItemsOfAnkaraKebap') ? JSON.parse(localStorage.getItem('cartItemsOfAnkaraKebap')) : [],
      cartTotalQuantity: localStorage.getItem('cartItemsTotalQuantity') ? JSON.parse(localStorage.getItem('cartItemsTotalQuantity')) : 0,
      cartTotalAmount: localStorage.getItem('cartItemsTotalAmount') ? JSON.parse(localStorage.getItem('cartItemsTotalAmount')) : 0,
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
          localStorage.setItem('cartItemsOfAnkaraKebap', JSON.stringify(state.cartItems))
          localStorage.setItem('cartItemsTotalAmount', JSON.stringify(state.cartTotalAmount))
          localStorage.setItem('cartItemsTotalQuantity', JSON.stringify(state.cartTotalQuantity))
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
          localStorage.setItem('cartItemsOfAnkaraKebap', JSON.stringify(state.cartItems))
          localStorage.setItem('cartItemsTotalAmount', JSON.stringify(state.cartTotalAmount))
          localStorage.setItem('cartItemsTotalQuantity', JSON.stringify(state.cartTotalQuantity))
      }
    }
  })

  export const { addToCart, decreaseCart } = cartSlice.actions

  export const selectCart = state => state.cart.cartItems;
  export const selectCartTotalQuantity = state => state.cart.cartTotalQuantity;

  export default cartSlice.reducer;