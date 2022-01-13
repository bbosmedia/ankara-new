import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { YMaps, Map, Placemark } from 'react-yandex-maps'

const ContactsPage = ({ lang }) => {
	const [page, setPage] = useState(null)
	const fetchPage = async () => {
		try {
			var items = await axios.get('https://api.ankara.uz/contacts')
			if (items.status === 200) {
				setPage(items.data)
			}
		} catch (e) {
			console.log(e)
		}
	}
	useEffect(() => {
		fetchPage()
	}, [lang])

	return (
		<div className="container-fluid ya-container-fluid">
			<div className="ya-page-block">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb ya-breadcrumb">
						<li className="breadcrumb-item">
							{lang === '/uz' && (
								<Link to={lang} className="nuxt-link-active">
									Bosh Sahifa
								</Link>
							)}
							{lang === '/en' && (
								<Link to={lang} className="nuxt-link-active">
									Home
								</Link>
							)}
							{lang === '/ru' && (
								<Link to={lang} className="nuxt-link-active">
									Главная
								</Link>
							)}
						</li>
						{lang === '/uz' && (
							<li aria-current="page" className="breadcrumb-item active">
								Aloqa
							</li>
						)}
						{lang === '/en' && (
							<li aria-current="page" className="breadcrumb-item active">
								Contacts
							</li>
						)}
						{lang === '/ru' && (
							<li aria-current="page" className="breadcrumb-item active">
								Контакты
							</li>
						)}
					</ol>
				</nav>
				{lang === '/uz' && <h1 className="ya-group-title">Aloqa</h1>}
				{lang === '/en' && <h1 className="ya-group-title">Contacts</h1>}
				{lang === '/ru' && <h1 className="ya-group-title">Контакты</h1>}
				<div className="row">
					<div className="col-md-6">
               {page && (
						<div className="ya-page-text">
							{lang === '/uz' && <div dangerouslySetInnerHTML={{ __html: page.contentUz }} />}
							{lang === '/ru' && <div dangerouslySetInnerHTML={{ __html: page.contentRu }} />}
							{lang === '/en' && <div dangerouslySetInnerHTML={{ __html: page.contentUz }} />}
						</div>
					)}
					</div>
					<div className="col-md-6">
						<YMaps>
							<Map style={{ height: '85vh' }} defaultState={{ center: [41.2995, 69.2401], zoom: 12 }}>
								<Placemark
									defaultGeometry={[41.3308916, 69.2450557]}
									options={{
										iconLayout: 'default#image',
										iconImageHref: 'images/placemarker.png',
										iconImageSize: [70, 70],
									}}
								/>
								<Placemark
									defaultGeometry={[41.3069837, 69.2811906]}
									options={{
										iconLayout: 'default#image',
										iconImageHref: 'images/placemarker.png',
										iconImageSize: [70, 70],
									}}
								/>
								<Placemark
									defaultGeometry={[41.3416481, 69.2211026]}
									options={{
										iconLayout: 'default#image',
										iconImageHref: 'images/placemarker.png',
										iconImageSize: [70, 70],
									}}
								/>
							</Map>
						</YMaps>
					</div>
				</div>
			</div>
		</div>
	)
}

function ContactHeader(lang) {
	if (lang === '/uz') {
		return <h1 className="ya-group-title">Aloqa</h1>
	} else if (lang === '/en') {
		return <h1 className="ya-group-title">Contacts</h1>
	} else {
		return <h1 className="ya-group-title">Контакты</h1>
	}
}

export default ContactsPage
