import {configureStore } from '@reduxjs/toolkit'
import changeLanguageSlice from './ChangeLanguage';
import cartSlice from './CartRedux'
import registerSlice from './ChangeRegister'
import foodmenuSlice from './FoodMenu'
import checkoutSlice from './Checkout'

const store = configureStore({
    reducer: {
        changelanguage: changeLanguageSlice,
        cart: cartSlice,
        register: registerSlice,
        foodmenu: foodmenuSlice,
        checkout: checkoutSlice,
      },
  })

  export default store;