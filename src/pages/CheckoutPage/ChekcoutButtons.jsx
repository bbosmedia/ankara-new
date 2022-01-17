import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useRoutes } from 'react-router-dom'
import { deleteCard, selectSentCartItems } from '../../redux/CartRedux'
import { selectAccesToken } from '../../redux/ChangeRegister'
import { addPayment, checkvalidation, selectCoords, selectFull, selectHome, selectOrderType, selectPaymentType, selectStreet, selectTextOrder } from '../../redux/Checkout'

const ChekcoutButtons = ({ lang }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const accesss = useSelector(selectAccesToken)
	const ordert = useSelector(selectOrderType)
	const street = useSelector(selectStreet)
	const home = useSelector(selectHome)
	const paymentType = useSelector(selectPaymentType)
	const coords = useSelector(selectCoords)
	const products = useSelector(selectSentCartItems)
	var today = new Date()
	const validationFull = useSelector(selectFull)
	const note = useSelector(selectTextOrder)
	const orderFetch = async () => {
		dispatch(checkvalidation())
		setTimeout(() => {if (validationFull) {
			try {
				var item = await axios.post(
					'https://api.ankara.uz/shop/cart/checkout',
					{
						type: ordert,
						street: street,
						home: home,
						payment_type: parseInt(paymentType),
						note: note,
						latitude: `${coords[0]}`,
						longitude: `${coords[1]}`,
						at_time: 1,
						time: `${today.getHours()}:${today.getMinutes()}`,
						items: products,
					},
					{ headers: { Authorization: 'Bearer ' + accesss } }
				)
				if (item.status === 200) {
					dispatch(addPayment(item.data))
					dispatch(deleteCard());
					if (lang === '/uz') {
						navigate('/uz', { replace: true })
					} else if (lang === '/en') {
						navigate('/en', { replace: true })
					} else {
						navigate('/', { replace: true })
					}
				}
			} catch (e) {
				console.log(e)
			}
		}}, 500);
	}
	return (
		<div className="form-row d-flex justify-content-between align-items-center">
			{lang === '/ru' && (
				<button onClick={orderFetch} type="button" className="btn btn ya-btn-red order-btn btn-none">
					Заказать
				</button>
			)}
			{lang === '/en' && (
				<button onClick={orderFetch} type="button" className="btn btn ya-btn-red order-btn btn-none">
					To order
				</button>
			)}
			{lang === '/uz' && (
				<button onClick={orderFetch} type="button" className="btn btn ya-btn-red order-btn btn-none">
					Buyurtma berish
				</button>
			)}
			{lang === '/ru' && (
				<Link to="/menu" className="back-link">
					Вернуться в меню
				</Link>
			)}
			{lang === '/uz' && (
				<Link to="/uz/menu" className="back-link">
					Menuga qaytish
				</Link>
			)}
			{lang === '/en' && (
				<Link to="/en/menu" className="back-link">
					Go back menu
				</Link>
			)}
		</div>
	)
}

export default ChekcoutButtons
