import React from 'react'
import InputOne from './InputOne'
import { useDispatch, useSelector } from 'react-redux';
import { changeHome, changeStreet, selectHome, selectHomeValidate, selectStreet, selectStreetValidate } from '../../redux/Checkout';

const CheckoutPageOrderTwo = ({lang}) => {
    const dispatch = useDispatch();
    const street = useSelector(selectStreet);
    const validateStreet = useSelector(selectStreetValidate);
    const home = useSelector(selectHome);
    const validateHome = useSelector(selectHomeValidate);
	return (
		<div className="form-row form-mb">
            {lang === '/ru' && <InputOne validate={validateStreet} value={street} change={(e) => dispatch(changeStreet(e.target.value))} placeholder="Улица" problemText="Пожалуйста, введите улица" />}
            {lang === '/en' && <InputOne validate={validateStreet} value={street} change={(e) => dispatch(changeStreet(e.target.value))} placeholder="Street" problemText="Please, enter your street" />}
            {lang === '/uz' && <InputOne validate={validateStreet} value={street} change={(e) => dispatch(changeStreet(e.target.value))} placeholder="Ko'cha" problemText="Iltimos ko'cha nomini kiriting" />}
            {lang === '/ru' && <InputOne validate={validateHome} value={home} change={(e) => dispatch(changeHome(e.target.value))} placeholder="Дом" problemText="Пожалуйста, введите дом" />}
            {lang === '/en' && <InputOne validate={validateHome} value={home} change={(e) => dispatch(changeHome(e.target.value))} placeholder="Home" problemText="Please enter home number" />}
            {lang === '/uz' && <InputOne validate={validateHome} value={home} change={(e) => dispatch(changeHome(e.target.value))} placeholder="Uy" problemText="Iltimos uyingizni raqamingizni kiriting" />}
		</div>
	)
}

export default CheckoutPageOrderTwo
