import {configureStore } from '@reduxjs/toolkit'
import changeLanguageSlice from './ChangeLanguage';
import cartSlice from './CartRedux'

const store = configureStore({
    reducer: {
        changelanguage: changeLanguageSlice,
        cart: cartSlice
      },
  })

  export default store;