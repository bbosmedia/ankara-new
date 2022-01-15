import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectName, selectNameValidate, changeName, changePhone, selectPhoneValidate, selectPhone } from '../../redux/Checkout';
import InputOne from './InputOne';

const CheckoutPageOrderTop = ({lang}) => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const phone = useSelector(selectPhone);
    const validateName = useSelector(selectNameValidate);
    const validatePhone = useSelector(selectPhoneValidate);
	return (
		<div className="form-row form-mb">
			{lang === '/ru' && <InputOne validate={validateName} value={name} change={(e) => dispatch(changeName(e.target.value))} placeholder="ФИО" problemText="Пожалуйста, введите имя" />}
			{lang === '/en' && <InputOne validate={validateName} value={name} change={(e) => dispatch(changeName(e.target.value))} placeholder="Name" problemText="Please enter name" />}
			{lang === '/uz' && <InputOne validate={validateName} value={name} change={(e) => dispatch(changeName(e.target.value))} placeholder="FISH" problemText="Iltioms ismingizni kiriting" />}
			{lang === '/ru' && <InputOne validate={validatePhone} value={phone} change={(e) => dispatch(changePhone(e.target.value))} placeholder="+998 99 123-45-67" problemText="Пожалуйста, введите номер телефона" />}
			{lang === '/uz' && <InputOne validate={validatePhone} value={phone} change={(e) => dispatch(changePhone(e.target.value))} placeholder="+998 99 123-45-67" problemText="Iltimos telefon raqamingizni kiriting" />}
			{lang === '/en' && <InputOne validate={validatePhone} value={phone} change={(e) => dispatch(changePhone(e.target.value))} placeholder="+998 99 123-45-67" problemText="Please enter your phone" />}
		</div>
	)
}

export default CheckoutPageOrderTop
