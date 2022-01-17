import { createSlice } from '@reduxjs/toolkit'

const checkoutSlice = createSlice({
	name: 'checkout',
	initialState: {
		name: '',
		validateName: true,
		phone: '',
		validatePhone: true,
		street: '',
		validateStreet: true,
        home: '',
        validateHome: true,
		paymentType: "",
		coords: [],
	},
	reducers: {
		changeName(state, action) {
			state.name = action.payload
			if (state.name.length > 0) {
				state.validateName = true
			} else {
				state.validateName = false
			}
		},

		changePhone(state, action) {
			state.phone = action.payload

			var str = state.phone.replace(/ /g, '')
			str = str.replace(/[+-]/g, '')
			str = parseInt(str)
			if (str.toString().length === 12) {
				if (Number.isInteger(str)) {
					state.validatePhone = true
				} else {
					state.validatePhone = false
				}
				if (str.toString().slice(0, 3) !== '998') {
					state.validatePhone = false
				}
			} else {
				state.validatePhone = false
			}
		},

		changeStreet(state, action) {
			state.street = action.payload
			if (state.street.length > 0) {
				state.validateStreet = true
			} else {
				state.validateStreet = false
			}
		},

        changeHome(state, action) {
			state.home = action.payload
			if (state.home.length > 0) {
				state.validateHome = true
			} else {
				state.validateHome = false
			}
		},

		changePayment(state, action){
			state.paymentType = action.payload;
		},

		chnageCoords(state, action){
			state.coords = action.payload;
		}
	},
})

export const { changeName, changePhone, changeStreet, changeHome, changePayment, chnageCoords } = checkoutSlice.actions

export const selectName = (state) => state.checkout.name
export const selectPhone = (state) => state.checkout.phone
export const selectStreet = (state) => state.checkout.street
export const selectHome = (state) => state.checkout.home
export const selectPhoneValidate = (state) => state.checkout.validatePhone
export const selectNameValidate = (state) => state.checkout.validateName
export const selectStreetValidate = (state) => state.checkout.validateStreet
export const selectHomeValidate = (state) => state.checkout.validateHome
export const selectPaymentType = (state) => state.checkout.paymentType
export const selectCoords = (state) => state.checkout.coords

export default checkoutSlice.reducer
