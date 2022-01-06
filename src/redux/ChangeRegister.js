import { createSlice } from '@reduxjs/toolkit'


const registerSlice = createSlice({
    name: 'register',
    initialState: {
      register: localStorage.getItem('ankaraRegisterqaeqeqea') ? JSON.parse(localStorage.getItem('ankaraRegisterqaeqeqea')) : 'login',
    },
    reducers: {
      changeRegister(state, action){
          state.register = action.payload;
          localStorage.setItem('ankaraRegisterqaeqeqea', JSON.stringify(state.register))
      },
    }
  })

  export const { changeRegister } = registerSlice.actions

  export const selectRegister = state => state.register.register;

  export default registerSlice.reducer;