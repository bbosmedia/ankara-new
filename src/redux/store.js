import {configureStore } from '@reduxjs/toolkit'
import changeLanguageSlice from './ChangeLanguage';

const store = configureStore({
    reducer: {
        changelanguage: changeLanguageSlice,
      },
  })

  export default store;