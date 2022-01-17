import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GeolocationControl, Map, Placemark, YMaps } from 'react-yandex-maps'
import { chnageCoords, selectCoords } from '../../redux/Checkout'

const CheckoutMap = () => {
	const dispatch = useDispatch()
	const rcoords = useSelector(selectCoords)
	const changeCoordsa = (e) => {
		const coords = e.get('coords')

		dispatch(chnageCoords(coords))
	}
	return (
		<YMaps>
			<Map modules={["Placemark", "geocode", "geoObject.addon.balloon"]} style={{ height: '60vh' }} defaultState={{ center: [41.2995, 69.2401], zoom: 12 }} onClick={changeCoordsa}>
				{rcoords.length > 0 && (
					<Placemark
						geometry={[rcoords[0], rcoords[1]]}
						options={{
							iconLayout: 'default#image',
							iconImageHref: 'images/placemarker.png',
							iconImageSize: [50, 50],
						}}
					/>
				)}
                <GeolocationControl />
			</Map>
		</YMaps>
	)
}

export default CheckoutMap
