import { createSlice } from '@reduxjs/toolkit'


const foodmenuSlice = createSlice({
    name: 'foodmenu',
    initialState: {
      foodMenuItems: localStorage.getItem('foodmenu1dggsgdhe') ? JSON.parse(localStorage.getItem('foodmenu1dggsgdhe')) : [],
    },
    reducers: {
      updateFoodMenu(state, action){
          state.foodMenuItems = action.payload;
          localStorage.setItem('foodmenu1dggsgdhe', JSON.stringify(state.foodMenuItems))
      }
    }
  })

  export const { updateFoodMenu} = foodmenuSlice.actions

  export const selectFoodMenu = state => state.foodmenu.foodMenuItems;

  export default foodmenuSlice.reducer;