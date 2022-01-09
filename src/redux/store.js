import {configureStore } from '@reduxjs/toolkit'
import changeLanguageSlice from './ChangeLanguage';
import cartSlice from './CartRedux'
import registerSlice from './ChangeRegister'
import foodmenuSlice from './FoodMenu'

const store = configureStore({
    reducer: {
        changelanguage: changeLanguageSlice,
        cart: cartSlice,
        register: registerSlice,
        foodmenu: foodmenuSlice
      },
  })

  export default store;