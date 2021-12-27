import { createSlice } from '@reduxjs/toolkit'


const changeLanguageSlice = createSlice({
    name: 'changelanguage',
    initialState: {
      language: 'ru'
    },
    reducers: {
      changedlanguage: (action, state )=> {
        state.language = action.payload.language
      },
    }
  })

  export const { changedlanguage } = changeLanguageSlice.actions

  export default changeLanguageSlice.reducer;