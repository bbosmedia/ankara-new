import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePayment, selectPaymentType } from '../../redux/Checkout'
import InputRadio from './InputRadio'

const FormCheckboxes = ({lang}) => {
    const dispatch = useDispatch()
    const paymenType = useSelector(selectPaymentType);
	return (
		<div className="form-mb">
			<div className="checkboxes">
                {lang === '/uz' && <InputRadio label="Naqd" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentCash" check={paymenType} value="1" />}
                {lang === '/en' && <InputRadio label="Cash" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentCash" check={paymenType} value="1" />}
                {lang === '/ru' && <InputRadio label="Наличные" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentCash" check={paymenType} value="1" />}
                {lang === '/en' && <InputRadio label="Plastic Card" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentTerminal" check={paymenType} value="2" />}
                {lang === '/uz' && <InputRadio label="Terminal" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentTerminal" check={paymenType} value="2" />}
                {lang === '/ru' && <InputRadio label="Терминал" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentTerminal" check={paymenType} value="2" />}
                <InputRadio label="Payme" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentPayme" check={paymenType} value="3" />
                <InputRadio label="Click" onChange={(e)=>dispatch(changePayment(e.target.value))} id="paymentClick" check={paymenType} value="4" />
			</div>
			<div className="invalid-feedback">Пожалуйста, выберите способ оплаты</div>
		</div>
	)
}

export default FormCheckboxes
