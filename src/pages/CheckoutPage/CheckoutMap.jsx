import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FullscreenControl, GeolocationControl, Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps'
import { chnageCoords, selectCoords } from '../../redux/Checkout'

const CheckoutMap = () => {
	const dispatch = useDispatch()
	const rcoords = useSelector(selectCoords)
	const changeCoordsa = (e) => {
		const coords = e.get('coords')
		console.log(coords)
		dispatch(chnageCoords(coords))
	}
	return (
		<YMaps>
			<Map modules={['Placemark', 'geocode', 'geoObject.addon.balloon']} style={{ height: '60vh', marginBottom: '20px' }} defaultState={{ center: [41.3308956, 69.242867], zoom: 14 }} onClick={changeCoordsa}>
				{rcoords.length > 0 && (
					<Placemark
						geometry={rcoords}
						options={{
							iconLayout: 'default#image',
							iconImageHref: '/images/placemarker.png',
							iconImageSize: [50, 50],
						}}
					/>
				)}
				<ZoomControl />
				<FullscreenControl />
				<GeolocationControl />
			</Map>
		</YMaps>
	)
}

export default CheckoutMap
