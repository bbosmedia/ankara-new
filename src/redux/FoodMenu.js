import { createSlice } from '@reduxjs/toolkit'


const foodmenuSlice = createSlice({
    name: 'foodmenu',
    initialState: {
      foodMenuItems: localStorage.getItem('foodmenu1dggsgdhe') ? JSON.parse(localStorage.getItem('foodmenu1dggsgdhe')) : [],
      coordinates: localStorage.getItem('coordinates') ? JSON.parse(localStorage.getItem('coordinates')) : [],
      showSearchModal: false,
    },
    reducers: {
      updateFoodMenu(state, action){
          state.foodMenuItems = action.payload;
          localStorage.setItem('foodmenu1dggsgdhe', JSON.stringify(state.foodMenuItems))
      },
      updateCoordinates(state, action){
        state.coordinates = action.payload;
      },
      updateSearchModal(state, action){
        state.showSearchModal = !state.showSearchModal
      }
    }
  })

  export const { updateFoodMenu, updateCoordinates, updateSearchModal} = foodmenuSlice.actions

  export const selectFoodMenu = state => state.foodmenu.foodMenuItems;
  export const selectCoordinates = state => state.foodmenu.coordinates;
  export const selectSearchModal = state => state.foodmenu.showSearchModal;

  export default foodmenuSlice.reducer;