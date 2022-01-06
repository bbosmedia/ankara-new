import {configureStore } from '@reduxjs/toolkit'
import changeLanguageSlice from './ChangeLanguage';
import cartSlice from './CartRedux'
import registerSlice from './ChangeRegister'

const store = configureStore({
    reducer: {
        changelanguage: changeLanguageSlice,
        cart: cartSlice,
        register: registerSlice
      },
  })

  export default store;