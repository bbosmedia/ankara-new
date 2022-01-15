import { createSlice } from '@reduxjs/toolkit'


const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
      name: '',
      validateName: true,
      phone: '',
      validatePhone: true,
    },
    reducers: {
      changeName(state, action){
          state.name = action.payload;
          if(state.name.length > 0){
              state.validateName = true
          }else{
              state.validateName = false
          }
      },

      changePhone(state, action){
          state.phone = action.payload;

        var str = state.phone.replace(/ /g, '')
		str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '')
		str = parseInt(str)
		if (str.toString().length === 12) {
			if (Number.isInteger(str)) {
				state.validatePhone = true;
			} else {
				state.validatePhone = false;
			}
			if (str.toString().slice(0, 3) !== '998') {
				state.validatePhone = false;
			}
		} else {
			state.validatePhone = false;
		}
      },


    }
  })

  export const { changeName, changePhone } = checkoutSlice.actions;

  export const selectName = state => state.checkout.name;
  export const selectPhone = state => state.checkout.phone;
  export const selectPhoneValidate = state => state.checkout.validatePhone;
  export const selectNameValidate = state => state.checkout.validateName;

  export default checkoutSlice.reducer;