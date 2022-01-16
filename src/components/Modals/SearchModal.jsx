import axios from 'axios'
import { nominalTypeHack } from 'prop-types'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs'
import { selectSearchModal, updateSearchModal } from '../../redux/FoodMenu'

const SearchModal = () => {
	const [lang, setLang] = useState('/ru')
	const breadcrumbs = useReactRouterBreadcrumbs()
	const [products, setProducts] = useState([])
	const dispatch = useDispatch()
	const close = () => {
		dispatch(updateSearchModal())
	}

	const searchProduct = async (e) => {
		var name = e.target.value
		if (name.length >= 3) {
			try {
				var items = await axios.get(`https://api.ankara.uz/shop/products?text=${name}`)
				if (items.status === 200) {
					setProducts(items.data)
				}
			} catch (e) {
				console.log(e)
			}
		} else {
			setProducts([])
		}
	}
	useEffect(() => {
		document.querySelector('#searchModal___BV_modal_outer_').addEventListener('click', (event) => {
			if (!document.querySelector('#searchModal___BV_modal_body_').contains(event.target)) {
				dispatch(updateSearchModal())
			}
		})

		if (breadcrumbs.length > 1) {
			if (breadcrumbs[1].key === '/uz') {
				setLang('/uz')
			} else if (breadcrumbs[1].key === '/en') {
				setLang('/en')
			} else {
				setLang('/ru')
			}
		} else {
			setLang('/ru')
		}
	}, [breadcrumbs])
	return (
		<div id="searchModal___BV_modal_outer_" style={{ position: 'absolute', zIndex: 1040 }}>
			<div id="searchModal" role="dialog" aria-describedby="searchModal___BV_modal_body_" className="modal fade show modal fade" aria-modal="true" style={{ display: 'block' }}>
				<div className="modal-dialog modal-md">
					<span></span>
					<div id="searchModal___BV_modal_content_" className="modal-content">
						<div id="searchModal___BV_modal_body_" className="modal-body">
							<div className="cart-modal-content">
								<div className="vue-simple-suggest designed focus">
									<div role="combobox" aria-haspopup="listbox" aria-owns="836-suggestions" aria-expanded="false" className="input-wrapper">
										{lang === '/ru' && <input pattern="\w+" onChange={(e) => searchProduct(e)} placeholder="Поиск" className="default-input" aria-autocomplete="list" aria-controls="836-suggestions" />}

										{lang === '/en' && <input pattern="\w+" onChange={(e) => searchProduct(e)} placeholder="Search" className="default-input" aria-autocomplete="list" aria-controls="836-suggestions" />}

										{lang === '/uz' && <input pattern="\w+" onChange={(e) => searchProduct(e)} placeholder="Izlash" className="default-input" aria-autocomplete="list" aria-controls="836-suggestions" />}
									</div>
									{products.length > 0 && (
										<ul className="suggestions">
											{products.map((product) => {
												if (lang === '/en') {
													return (
														<li key={product.id} style={{ padding: '5px 10px' }}>
															<Link onClick={() => close()} style={{ color: '#201e1e', fontSize: '16px', textDecoration: 'none' }} to={`en/product/${product.id}`}>
																{product.nameEn}
															</Link>
														</li>
													)
												} else if (lang === '/uz') {
													return (
														<li key={product.id} style={{ padding: '5px 10px' }}>
															<Link onClick={() => close()} style={{ color: '#201e1e', fontSize: '16px', textDecoration: 'none' }} to={`uz/product/${product.id}`}>
																{product.nameUz}
															</Link>
														</li>
													)
												} else {
													return (
														<li key={product.id} style={{ padding: '5px 10px' }}>
															<Link onClick={() => close()} style={{ color: '#201e1e', fontSize: '16px', textDecoration: 'none' }} to={`/product/${product.id}`}>
																{product.nameRu}
															</Link>
														</li>
													)
												}
											})}
										</ul>
									)}
								</div>
							</div>
						</div>
					</div>
					<span></span>
				</div>
			</div>
			<div id="searchModal___BV_modal_backdrop_" className="modal-backdrop"></div>
		</div>
	)
}

export default SearchModal
