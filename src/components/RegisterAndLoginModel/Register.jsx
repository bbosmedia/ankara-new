import axios from 'axios'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeRegister } from '../../redux/ChangeRegister'
import { updateAccesToken } from '../../redux/ChangeRegister'

const Register = ({ lang, changeLogin }) => {
	const [name, setName] = useState('')
	const [date, setDate] = useState('')
	const [phone, setPhone] = useState('')
	const [code, setCode] = useState('')
	const [validateName, setValidateName] = useState(true)
	const [validateDate, setValidateDate] = useState(true)
	const [validatePhone, setValidatePhone] = useState(true)
	const [validateFull, setValidateFull] = useState(true)
	const [validPhoneRegister, setValidPhoneRegister] = useState(false)
	const [getCode, setGetCode] = useState(false)
	const [validateCode, setValidateCode] = useState(false)

	// Change Phone Number
	const changePhoneNumber = (e) => {
		setValidPhoneRegister(false)
		var str = e.target.value
		setPhone(str)
		str = str.replace(/ /g, '')
		str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '')
		str = parseInt(str)
		if (str.toString().length === 12) {
			if (Number.isInteger(str)) {
				setGetCode(false)
				setValidatePhone(true)
				if (validateDate && validateName && name.length > 1 && date.length === 10 && Number.isInteger(str)) {
					setValidateFull(false)
					
				}
			} else {
				setValidateFull(true)
				setValidatePhone(false)
			}
			if (str.toString().slice(0, 3) !== '998') {
				setValidatePhone(false)
				setValidateFull(true)
			}
		} else {
			setValidatePhone(false)
		}
	}

	const changeName = (e) => {
		var strName = e.target.value
		setName(strName)
		strName = strName.replace(/ /g, '')
		if (strName.length > 1) {
			setValidateName(true)
		} else {
			setValidateName(false)
		}
		if (validateDate && validatePhone && strName.length > 1 && phone.length > 5 && date.length === 10) {
			setValidateFull(false)
		} else {
			setValidateFull(true)
		}
	}

	const changeDate = (e) => {
		var strDate = e.target.value
		setDate(strDate)
		strDate = strDate.replace(/ /g, '')
		if (strDate.length === 10) {
			setValidateDate(true)
		} else {
			setValidateDate(false)
		}
		if (validateName && validatePhone && strDate.length === 10 && name.length > 1 && phone.length > 5) {
			setValidateFull(false)
		} else {
			setValidateFull(true)
		}
	}

	const changeCode = (e) => {
		var codeb = e.target.value
		setCode(codeb)

		if (codeb.length === 6 && Number.isInteger(parseInt(codeb))) {
			setValidateCode(true)
		}
	}

	const funGetCode = async () => {
		var str = phone
		str = str.replace(/ /g, '')
		str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '')
		str = parseInt(str)

		if (validateFull === false) {
			setGetCode(true)
			try {
				var token = await axios.post('https://api.ankara.uz/signup/get-code', {
					fullName: name,
					birthdate: date,
					phone: str.toString(),
				})
				if (token.status === 200) {
					setGetCode(true)
				}
			} catch (e) {

				if (e.response.data.birthdate.length > 0) {
					setValidateDate(false)
				}
				if (e.response.data.phone.length > 0) {
					setValidatePhone(false)
					setValidPhoneRegister(true)
				}
				setGetCode(false)
			}
		}
	}

	const funRegister = async () => {
		var str = phone
		str = str.replace(/ /g, '')
		str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '')
		str = parseInt(str)

		if (validateFull === false) {
			setValidateCode(true)
			try {
				var token = await axios.post('https://api.ankara.uz/signup/check-code', {
					fullName: name,
					birthdate: date,
					phone: str.toString(),
					code: code.toString(),
				})
				if (token.status === 200) {
					
					dispatch(updateAccesToken(token.data))
					setGetCode(false)
					setValidateCode(true)
					setName('')
					setCode('')
					setPhone('')
					setDate('')
					changeLogin()
				}
			} catch (e) {

				if (e.response.data.birthdate.length > 0) {
					setValidateDate(false)
				}
				if (e.response.data.phone.length > 0) {
					setValidatePhone(false)
					setValidPhoneRegister(true)
				}
				setValidateCode(false)
			}
		}
	}

	const dispatch = useDispatch()
	if (lang === '/uz') {
		return (
			<>
				<div className="form-group">
					{getCode ? (
						<input value={name} id="register-name" autoComplete="off" placeholder={name} className="form-control" disabled="disabled" />
					) : (
						<>
							<input value={name} onChange={(e) => changeName(e)} id="register-name" autoComplete="off" placeholder="Full Name" className={validateName ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">Please enter your full name</div>
						</>
					)}
				</div>
				<div className="form-group">
					{getCode ? (
						<input value={date} id="register-birthday" disabled="disabled" type="text" autoComplete="off" placeholder={date} className="form-control" />
					) : (
						<>
							<input value={date} onChange={(e) => changeDate(e)} id="register-birthday" type="text" autoComplete="off" placeholder="dd.mm.yyyy" className={validateDate ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">Please enter your correct date of birth</div>
						</>
					)}
				</div>
				<div className="form-group">
					{getCode ? (
						<input value={phone} id="register-phone" type="text" autoComplete="off" placeholder="+998 99 123-45-67" disabled="disabled" className="form-control" />
					) : (
						<>
							<input value={phone} onChange={(e) => changePhoneNumber(e)} id="register-phone" type="text" autoComplete="off" placeholder="+998 99 123-45-67" className={validatePhone ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">{validPhoneRegister ? "This phone was already registered" : "Please enter your correct phone number"}</div>
						</>
					)}
				</div>
				{getCode && (
					<>
						<input value={code} onChange={(e) => changeCode(e)} id="register-phone" type="text" autoComplete="off" placeholder="123456" className={validateCode ? 'form-control' : 'form-control is-invalid'} />
						<div className="invalid-feedback">Please enter the correct code you received on your phone</div>
					</>
				)}
				<div className="form-group mt-4">
					{getCode ? (
						<button disabled={validateCode ? false : true} onClick={funRegister} type="button" className="btn btn-danger ya-btn-red w-100">
							Register
						</button>
					) : (
						<button disabled={validateFull} onClick={funGetCode} type="button" className="btn btn-danger ya-btn-red w-100">
							Sen Code
						</button>
					)}
				</div>
				<div className="ya-ha-link">
					<a style={{ cursor: 'pointer' }} onClick={() => dispatch(changeRegister('login'))}>
						Already I have an account
					</a>
				</div>
			</>
		)
	} else if (lang === '/en') {
		return (
			<>
				<div className="form-group">
					{getCode ? (
						<input value={name} id="register-name" autoComplete="off" placeholder={name} className="form-control" disabled="disabled" />
					) : (
						<>
							<input value={name} onChange={(e) => changeName(e)} id="register-name" autoComplete="off" placeholder="Iltimos FIOni kiriting" className={validateName ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">Iltimos FIOni kiriting</div>
						</>
					)}
				</div>
				<div className="form-group">
					{getCode ? (
						<input value={date} id="register-birthday" disabled="disabled" type="text" autoComplete="off" placeholder={date} className="form-control" />
					) : (
						<>
							<input value={date} onChange={(e) => changeDate(e)} id="register-birthday" type="text" autoComplete="off" placeholder="kk.oo.yyyy" className={validateDate ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">Iltimos tug'ilgan kun sanasini to'g'ri kiriting</div>
						</>
					)}
				</div>
				<div className="form-group">
					{getCode ? (
						<input value={phone} id="register-phone" type="text" autoComplete="off" placeholder="+998 99 123-45-67" disabled="disabled" className="form-control" />
					) : (
						<>
							<input value={phone} onChange={(e) => changePhoneNumber(e)} id="register-phone" type="text" autoComplete="off" placeholder="+998 99 123-45-67" className={validatePhone ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">{validPhoneRegister ? "Bu telefon raqami allaqachon ro'yxatga olingan olingan" : "Iltimos telefon raqamingizni to'g'ri kiriting"}</div>
						</>
					)}
				</div>
				{getCode && (
					<>
						<input value={code} onChange={(e) => changeCode(e)} id="register-phone" type="text" autoComplete="off" placeholder="123456" className={validateCode ? 'form-control' : 'form-control is-invalid'} />
						<div className="invalid-feedback">Iltimos telefonizga kegan to'g'ri kodni kiriting</div>
					</>
				)}
				<div className="form-group mt-4">
					{getCode ? (
						<button disabled={validateCode ? false : true} onClick={funRegister} type="button" className="btn btn-danger ya-btn-red w-100">
							Ro'yxatdan O'tish
						</button>
					) : (
						<button disabled={validateFull} onClick={funGetCode} type="button" className="btn btn-danger ya-btn-red w-100">
							Kod jo'natish
						</button>
					)}
				</div>
				<div className="ya-ha-link">
					<a style={{ cursor: 'pointer' }} onClick={() => dispatch(changeRegister('login'))}>
						Mening akkauntim bor
					</a>
				</div>
			</>
		)
	} else {
		return (
			<>
				<div className="form-group">
					{getCode ? (
						<input value={name} id="register-name" autoComplete="off" placeholder={name} className="form-control" disabled="disabled" />
					) : (
						<>
							<input value={name} onChange={(e) => changeName(e)} id="register-name" autoComplete="off" placeholder="Пожалуйста введите ФИО" className={validateName ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">Пожалуйста введите ФИО</div>
						</>
					)}
				</div>
				<div className="form-group">
					{getCode ? (
						<input value={date} id="register-birthday" disabled="disabled" type="text" autoComplete="off" placeholder={date} className="form-control" />
					) : (
						<>
							<input value={date} onChange={(e) => changeDate(e)} id="register-birthday" type="text" autoComplete="off" placeholder="дд.мм.гггг" className={validateDate ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">Пожалуйста, введите дату рождения правильно</div>
						</>
					)}
				</div>
				<div className="form-group">
					{getCode ? (
						<input value={phone} id="register-phone" type="text" autoComplete="off" placeholder="+998 99 123-45-67" disabled="disabled" className="form-control" />
					) : (
						<>
							<input value={phone} onChange={(e) => changePhoneNumber(e)} id="register-phone" type="text" autoComplete="off" placeholder="+998 99 123-45-67" className={validatePhone ? 'form-control' : 'form-control is-invalid'} />
							<div className="invalid-feedback">{validPhoneRegister ? 'Этот номер телефона уже зарегистрирован' : 'Пожалуйста, введите ваш номер телефона правильно'}</div>
						</>
					)}
				</div>
				{getCode && (
					<>
						<input value={code} onChange={(e) => changeCode(e)} id="register-phone" type="text" autoComplete="off" placeholder="123456" className={validateCode ? 'form-control' : 'form-control is-invalid'} />
						<div className="invalid-feedback">Пожалуйста, введите правильный код, который вы получили на свой телефон</div>
					</>
				)}
				<div className="form-group mt-4">
					{getCode ? (
						<button disabled={validateCode ? false : true} onClick={funRegister} type="button" className="btn btn-danger ya-btn-red w-100">
							Зарегистрироваться
						</button>
					) : (
						<button disabled={validateFull} onClick={funGetCode} type="button" className="btn btn-danger ya-btn-red w-100">
							Выслать код
						</button>
					)}
				</div>
				<div className="ya-ha-link">
					<a style={{ cursor: 'pointer' }} onClick={() => dispatch(changeRegister('login'))}>
					 Уменя есть аккаунт
					</a>
				</div>
			</>
		)
	}
}

export default Register
