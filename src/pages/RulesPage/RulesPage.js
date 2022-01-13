import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RulesPage = ({ lang }) => {
	const [page, setPage] = useState(null)
	const fetchPage = async () => {
		try {
			var items = await axios.get('https://api.ankara.uz/visiting-rules')
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
								Restoranga kelish shartlari
							</li>
						)}
						{lang === '/en' && (
							<li aria-current="page" className="breadcrumb-item active">
								Restaurant visiting rules
							</li>
						)}
						{lang === '/ru' && (
							<li aria-current="page" className="breadcrumb-item active">
								Правила посещения ресторана
							</li>
						)}
					</ol>
				</nav>
				{lang === '/uz' && <h1 className="ya-group-title">Restoranga kelish shartlari</h1>}
				{lang === '/en' && <h1 className="ya-group-title">Restaurant visiting rules</h1>}
				{lang === '/ru' && <h1 className="ya-group-title">Правила посещения ресторана</h1>}
				{page && (
						<div className="ya-page-text">
							{lang === '/uz' && <div dangerouslySetInnerHTML={{ __html: page.contentUz }} />}
							{lang === '/ru' && <div dangerouslySetInnerHTML={{ __html: page.contentRu }} />}
							{lang === '/en' && <div dangerouslySetInnerHTML={{ __html: page.contentUz }} />}
						</div>
					)}
			</div>
		</div>
	)
}

export default RulesPage
