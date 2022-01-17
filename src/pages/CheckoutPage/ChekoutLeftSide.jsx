import React, { useState } from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import CheckoutMap from './CheckoutMap'
import CheckoutPageOrderTop from './CheckoutPageOrderTop'
import CheckoutPageOrderTwo from './CheckoutPageOrderTwo'
import FormCheckboxes from './FormCheckboxes'

const ChekoutLeftSide = ({ lang }) => {
   console.log(process.env.REACT_APP_GOOGLE_KEY)
	const [position, setPosition] = useState('delivery')
	return (
		<div className="col-md-8">
			<div className="tabs checkout-pills" id="__BVID__1291">
				<div className="card-header">
					<ul role="tablist" className="nav nav-pills card-header-pills" id="__BVID__1291__BV_tab_controls_">
						<li className="nav-item">
							<a onClick={() => setPosition('delivery')} className={`${position === 'delivery' ? 'nav-link active' : 'nav-link'}`}>
								{lang === '/ru' && 'Доставка'}
								{lang === '/en' && 'Delivery'}
								{lang === '/uz' && 'Yetkazib berish'}
							</a>
						</li>
						<li className="nav-item">
							<a onClick={() => setPosition('pickup')} className={`${position === 'pickup' ? 'nav-link active' : 'nav-link'}`}>
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
							<CheckoutMap />
							<p>
								<em>* Найдите на карте адрес доставки и кликайте на него.</em>
							</p>
							<CheckoutPageOrderTwo lang={lang} />
							{lang === '/ru' && <h5 className="mb-4">Выберите способ оплаты</h5>}
							{lang === '/en' && <h5 className="mb-4">Select a payment method</h5>}
							{lang === '/uz' && <h5 className="mb-4">To'lov turini </h5>}
							<FormCheckboxes lang={lang} />
							<div className="form-row form-mb">
								<textarea rows="6" placeholder="Комментарий к заказу" className="form-control"></textarea>
							</div>
							<div className="form-row d-flex justify-content-between align-items-center">
								<button type="button" className="btn btn ya-btn-red order-btn btn-none">
									Заказать
								</button>
								<a href="/menu" className="back-link">
									Вернуться в меню
								</a>
							</div>
						</form>
					</div>
					<div role="tabpanel" aria-hidden="true" className="tab-pane card-body" id="__BVID__1295" aria-labelledby="__BVID__1295___BV_tab_button__" style={{ display: 'none' }}>
						<form action="/">
							<div className="form-row form-mb">
								<div className="col">
									<input autoComplete="off" placeholder="ФИО" className="form-control" />
								</div>
								<div className="col">
									<input type="text" placeholder="+998 99 123-45-67" autoComplete="off" className="form-control" />
								</div>
							</div>
							<h5 className="mb-4">Выберите филиал</h5>
							<div className="form-mb">
								<div className="checkboxes">
									<div className="form-check form-check-inline mr-5">
										<input id="8f3bd71d-93cf-47d1-9b83-9aa117180750" type="radio" className="form-check-input" value="8f3bd71d-93cf-47d1-9b83-9aa117180750" />
										<label htmlFor="8f3bd71d-93cf-47d1-9b83-9aa117180750" className="form-check-label">
											Шота Руставели
										</label>
									</div>
									<div className="form-check form-check-inline mr-5">
										<input id="cfd5979e-0cbe-413d-b7bf-952b2ae8b125" type="radio" className="form-check-input" value="cfd5979e-0cbe-413d-b7bf-952b2ae8b125" />
										<label htmlFor="cfd5979e-0cbe-413d-b7bf-952b2ae8b125" className="form-check-label">
											Мегаполис
										</label>
									</div>
								</div>
								<div className="invalid-feedback">Пожалуйста, выберите филиал</div>
							</div>
							<h5 className="mb-4">Выберите способ оплаты</h5>
							<div className="form-mb">
								<div className="checkboxes">
									<div className="form-check form-check-inline mr-5">
										<input id="pickupPaymentCash" type="radio" value="1" className="form-check-input" />
										<label htmlFor="pickupPaymentCash" className="form-check-label">
											Наличные
										</label>
									</div>
									<div className="form-check form-check-inline mr-5">
										<input id="pickupPaymentTerminal" type="radio" value="2" className="form-check-input" />
										<label htmlFor="pickupPaymentTerminal" className="form-check-label">
											Терминал
										</label>
									</div>
									<div className="form-check form-check-inline mr-5">
										<input id="pickupPaymentPayme" type="radio" value="3" className="form-check-input" />
										<label htmlFor="pickupPaymentPayme" className="form-check-label">
											Payme
										</label>
									</div>
									<div className="form-check form-check-inline mr-5">
										<input id="pickupPaymentClick" type="radio" value="4" className="form-check-input" />
										<label htmlFor="pickupPaymentClick" className="form-check-label">
											Click
										</label>
									</div>
								</div>
								<div className="invalid-feedback">Пожалуйста, выберите способ оплаты</div>
							</div>
							<div className="form-row form-mb">
								<textarea rows="6" placeholder="Комментарий к заказу" className="form-control"></textarea>
							</div>
							<div className="form-row d-flex justify-content-between align-items-center">
								<button type="button" className="btn btn ya-btn-red order-btn btn-none">
									Заказать
								</button>
								<a href="/menu" className="back-link">
									Вернуться в меню
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChekoutLeftSide
