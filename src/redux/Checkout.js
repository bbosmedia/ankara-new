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
		paymentType: '',
		validatePaymentType: true,
		coords: [],
		validateFull: false,
		orderType: 1,
		textOrder: '',
		validateMap: true,
		payment: null,
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

		changeTextOrder(state, action) {
			state.textOrder = action.payload
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

		changePayment(state, action) {
			state.paymentType = action.payload
		},

		chnageCoords(state, action) {
			state.coords = action.payload
			if (state.coords.length > 1) {
				state.validateMap = true
			} else {
				state.validateMap = false
			}
		},

		changeOrderType(state, action) {
			state.orderType = parseInt(action.payload)
		},

		checkvalidation(state, action) {
			if (state.orderType === 1) {
				// Validate Street
				if (state.street.length > 0) {
					state.validateStreet = true
				} else {
					state.validateStreet = false
				}

				// Validate Home
				if (state.home.length > 0) {
					state.validateHome = true
				} else {
					state.validateHome = false
				}

				// Validate Phone
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

				//Validate Payment Type
				if (state.paymentType.length === 0) {
					state.validatePaymentType = false
				} else {
					state.validatePaymentType = true
				}

				// Validate Name
				if (state.name.length > 0) {
					state.validateName = true
				} else {
					state.validateName = false
				}

				// Validate Map
				if (state.coords.length > 1) {
					state.validateMap = true
				} else {
					state.validateMap = false
				}

				if (state.validateHome && state.validateName && state.validatePaymentType && state.validatePhone && state.validateStreet && state.validateMap) {
					state.validateFull = true
				} else {
					state.validateFull = false
				}
			} else {
				// Validate Name
				if (state.name.length > 0) {
					state.validateName = true
				} else {
					state.validateName = false
				}

				// Validate Phone
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

				//Validate Payment Type
				if (state.paymentType.length === 0) {
					state.validatePaymentType = false
				} else {
					state.validatePaymentType = true
				}

				if (state.validateName && state.validatePaymentType && state.validatePhone) {
					state.validateFull = true
				} else {
					state.validateFull = false
				}
			}
		},
		addPayment(state, action) {
			state.payment = action.payload
		},
	},
})

export const { changeName, changePhone, changeStreet, changeHome, changePayment, chnageCoords, changeOrderType, changeTextOrder, checkvalidation, addPayment } = checkoutSlice.actions

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
export const selectOrderType = (state) => state.checkout.orderType
export const selectTextOrder = (state) => state.checkout.textOrder
export const selectValidateMap = (state) => state.checkout.validateMap
export const selectFull = (state) => state.checkout.validateFull
export const selectPayment = (state) => state.checkout.payment

export default checkoutSlice.reducer
