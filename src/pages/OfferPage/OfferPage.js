import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const OfferPage = ({lang}) => {
  const [page, setPage] = useState(null)
	const fetchPage = async () => {
		try {
			var items = await axios.get('https://api.ankara.uz/public-offer')
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
									Ommaviy taklif
								</li>
							)}
							{lang === '/en' && (
								<li aria-current="page" className="breadcrumb-item active">
									Public offer
								</li>
							)}
							{lang === '/ru' && (
								<li aria-current="page" className="breadcrumb-item active">
									Публичная оферта
								</li>
							)}
						</ol>
					</nav>
          {lang === '/uz' && <h1 className="ya-group-title">Ommaviy taklif</h1>}
					{lang === '/en' && <h1 className="ya-group-title">Public offer</h1>}
					{lang === '/ru' && <h1 className="ya-group-title">Публичная оферта</h1>}
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

export default OfferPage
