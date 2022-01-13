import { createSlice } from '@reduxjs/toolkit'


const registerSlice = createSlice({
    name: 'register',
    initialState: {
      register: localStorage.getItem('ankaraRegisterqaeqeqea') ? JSON.parse(localStorage.getItem('ankaraRegisterqaeqeqea')) : 'login',
      accessToken: localStorage.getItem('sjajnsknca') ? JSON.parse(localStorage.getItem('sjajnsknca')) : '',
      phoneNumber: '',
      userName: '',
      
    },
    reducers: {
      changeRegister(state, action){
          state.register = action.payload;
          localStorage.setItem('ankaraRegisterqaeqeqea', JSON.stringify(state.register))
      },
      updateAccesToken(state, action){
        state.accessToken = action.payload
        localStorage.setItem('sjajnsknca', JSON.stringify(state.accessToken))
      },
      deleteAccesToken(state, action){
        state.accessToken = ""
        localStorage.removeItem("sjajnsknca")
      }
    }
  })

  export const { changeRegister, updateAccesToken, deleteAccesToken } = registerSlice.actions

  export const selectRegister = state => state.register.register;
  export const selectAccesToken = state => state.register.accessToken;

  export default registerSlice.reducer;