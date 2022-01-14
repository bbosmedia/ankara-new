import { createSlice } from '@reduxjs/toolkit'


const registerSlice = createSlice({
    name: 'register',
    initialState: {
      register: localStorage.getItem('ankaraRegisterqaeqeqea') ? JSON.parse(localStorage.getItem('ankaraRegisterqaeqeqea')) : 'login',
      accessToken: localStorage.getItem('sjajnsknca') ? JSON.parse(localStorage.getItem('sjajnsknca')) : '',
      userData: localStorage.getItem('hdjahjhfajhf') ? JSON.parse(localStorage.getItem('hdjahjhfajhf')) : [],
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
      },
      getUserData(state, action){
        state.userData = action.payload;
        localStorage.setItem('hdjahjhfajhf', JSON.stringify(state.userData))
      },
      deleteUserData(state, action){
        state.userData = [];
        localStorage.removeItem("hdjahjhfajhf")
      }
    }
  })

  export const { changeRegister, updateAccesToken, deleteAccesToken, getUserData, deleteUserData } = registerSlice.actions

  export const selectRegister = state => state.register.register;
  export const selectAccesToken = state => state.register.accessToken;
  export const selectUserdata = state => state.register.userData;

  export default registerSlice.reducer;