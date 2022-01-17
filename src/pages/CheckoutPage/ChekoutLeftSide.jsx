import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeOrderType, changeTextOrder, selectCoords, selectOrderType, selectTextOrder, selectValidateMap } from '../../redux/Checkout'
import CheckoutMap from './CheckoutMap'
import CheckoutPageOrderTop from './CheckoutPageOrderTop'
import CheckoutPageOrderTwo from './CheckoutPageOrderTwo'
import ChekcoutButtons from './ChekcoutButtons'
import FormCheckboxes from './FormCheckboxes'

const ChekoutLeftSide = ({ lang }) => {
	const dispatch = useDispatch()
	const orderType = useSelector(selectOrderType);
	const coords = useSelector(selectCoords);
	const textOrder = useSelector(selectTextOrder);
	const validateMap = useSelector(selectValidateMap);
	return (
		<div className="col-md-8">
			<div className="tabs checkout-pills" id="__BVID__1291">
				<div className="card-header">
					<ul role="tablist" className="nav nav-pills card-header-pills" id="__BVID__1291__BV_tab_controls_">
						<li className="nav-item">
							<a onClick={() => dispatch(changeOrderType('1'))} className={`${orderType === 1 ? 'nav-link active' : 'nav-link'}`}>
								{lang === '/ru' && 'Доставка'}
								{lang === '/en' && 'Delivery'}
								{lang === '/uz' && 'Yetkazib berish'}
							</a>
						</li>
						<li className="nav-item">
							<a onClick={() => dispatch(changeOrderType('2'))} className={`${orderType === 2 ? 'nav-link active' : 'nav-link'}`}>
								{lang === '/ru' && 'Самовывоз'}
								{lang === '/en' && 'Pickup'}
								{lang === '/uz' && 'Olib ketish'}
							</a>
						</li>
					</ul>
				</div>
				<div className="tab-content" id="__BVID__1291__BV_tab_container_">
					<div role="tabpanel" aria-hidden="false" className="tab-pane active card-body" id="__BVID__1292" aria-labelledby="__BVID__1292___BV_tab_button__">
						<form action="/">
							<CheckoutPageOrderTop lang={lang} />
							{orderType === 1 && <CheckoutMap />}
							{validateMap === false && 
							<>
							{coords.length != 2 && <p style={{marginTop: '20px', color: 'red'}}>
								{lang === '/ru' && <em>* Найдите на карте адрес доставки и кликайте на него.</em>}
								{lang === '/en' && <em>* Find the delivery address on the map and click on it.</em>}
								{lang === '/uz' && <em>* Xaritada yetkazib berish manzilini toping va ustiga bosing.</em>}
							</p>}
							</>
							}
							
							{orderType === 1 && <CheckoutPageOrderTwo lang={lang} />}
							{lang === '/ru' && <h5 className="mb-4">Выберите способ оплаты</h5>}
							{lang === '/en' && <h5 className="mb-4">Select a payment method</h5>}
							{lang === '/uz' && <h5 className="mb-4">To'lov turini </h5>}
							<FormCheckboxes lang={lang} />
							<div className="form-row form-mb">
								{lang === '/ru' && <textarea rows="6" value={textOrder} onChange={(e)=>dispatch(changeTextOrder(e.target.value))} placeholder="Комментарий к заказу" className="form-control"></textarea>}
								{lang === '/en' && <textarea rows="6" value={textOrder}  onChange={(e)=>dispatch(changeTextOrder(e.target.value))} placeholder="Comment to the order" className="form-control"></textarea>}
								{lang === '/uz' && <textarea rows="6" value={textOrder} value={textOrder}  onChange={(e)=>dispatch(changeTextOrder(e.target.value))} placeholder="Buyurtmaga sharh qoldiring" className="form-control"></textarea>}
							</div>
							<ChekcoutButtons  lang={lang} />
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChekoutLeftSide
