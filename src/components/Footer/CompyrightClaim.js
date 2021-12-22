import React from 'react'

const CompyrightClaim = ({lang}) => {
    var year = new Date().getFullYear();
    if(lang === '/uz'){
        return (
            <div className="ya-copyright">
                <div className="container-fluid ya-container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                        <div className="ya-cr-text">© {year} Ankarakebap. Barcha huquqlar ximoyalangan.</div>
                        </div>
                        <div className="col-md-6 text-right">
                        <div className="ya-apps">
                            Mobil Ilova Ko'chirish
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
        )
    }else if(lang === '/en'){
        return (
            <div className="ya-copyright">
                <div className="container-fluid ya-container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                        <div className="ya-cr-text">© {year} Ankarakebap. All rights reserved.</div>
                        </div>
                        <div className="col-md-6 text-right">
                        <div className="ya-apps">
                            Download The Application
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
        )
    }else{
        return (
            <div className="ya-copyright">
                <div className="container-fluid ya-container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                        <div className="ya-cr-text">© {year} Анкаракебап. Все права защищены.</div>
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
        )
    }
}

export default CompyrightClaim
