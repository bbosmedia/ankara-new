import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    var year = new Date().getFullYear();
    return (
        <footer>
        <div className="ya-footer">
            <div className="container-fluid ya-container-fluid">
                <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-4">
                    <div className="ya-footer-logo mb-5"><a href="/" aria-current="page" className="nuxt-link-exact-active nuxt-link-active"><img height="65" src="/images/logo.svg" className="lazyLoad isLoaded" alt='logo' /></a></div>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-8">
                    <div className="d-flex align-items-start justify-content-between ya-footer-list">
                        <ul className="ya-footer-menu list-unstyled">
                            <li className="fm-item">
                                <Link to="/about" className="">О нас</Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/menu" className="">Меню</Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/actions" className="">Акции
                                </Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/restaurants" className="">Рестораны</Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/delivery" className="">Доставка</Link>
                            </li>
                        </ul>
                        <ul className="ya-footer-menu list-unstyled">
                            <li className="fm-item d-none">
                                <Link to="/vacancy">Вакансии</Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/gallery">Галерея</Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/contacts">Контакты</Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/offer">Публичная оферта</Link>
                            </li>
                            <li className="fm-item">
                                <Link to="/rules">Правила посещения ресторана</Link>
                            </li>
                        </ul>
                        <div className="ya-footer-detail text-right">
                            <div>
                                <p className="ya-footer-phone mb-0"><a href="tel:1089">1089</a></p>
                                <p className="ya-footer-time">с 10:00 до 02:00</p>
                            </div>
                            <div className="ya-social-list">
                                <p>Поделиться в соц сетях</p>
                                <ul className="ya-social">
                                <li>
                                    <Link to="https://www.facebook.com/yaponamama.uz" target="_blank" rel="noreferrer">
                                        <img loading="lazy" src="/images/socials/facebook.svg" alt='Facebook' className="img-fluid lazyLoad isLoaded" />
                                    </Link>
                                </li>
                                <li><a href="https://t.me/yaponamamabot" target="_blank" rel="noreferrer"><img loading="lazy" src="/images/socials/telegram.svg" className="img-fluid lazyLoad isLoaded" alt='Telegram'/></a></li>
                                <li><a href="https://www.youtube.com/channel/UCqTL4ti1tPw0l3sZjb_h2gA/featured" target="_blank" rel="noreferrer"><img loading="lazy" src="/images/socials/youtube.svg" className="img-fluid lazyLoad isLoaded" alt='Youtube'/></a></li>
                                <li><a href="https://www.instagram.com/yaponamama.uz" target="_blank" rel="noreferrer"><img loading="lazy" src="/images/socials/instagram.svg" className="img-fluid lazyLoad isLoaded" alt='Instagram' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ya-copyright">
            <div className="container-fluid ya-container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                    <div className="ya-cr-text">© {year} Японамама. Все права защищены.</div>
                    </div>
                    <div className="col-md-6 text-right">
                    <div className="ya-apps">
                        Скачать мобильное приложение
                        <a href="https://play.google.com/store/apps/details?id=uz.futuresoft.yaponamama" target="_blank" rel="noreferrer" className="mx-3">
                            <img height="35" src="images/google_play_button.svg" className="lazyLoad isLoaded" alt='Google Play Store' />
                        </a>
                        <a href="https://itunes.apple.com/us/app/yaponamama-restaurant/id1457179873" target="_blank" rel="noreferrer">
                            <img src="images/apple_store_button.svg" height="35" className="lazyLoad isLoaded" alt='Apple Store' />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer
