import React from 'react'

const ProfileCardQR = ({lang, qrPicture, balance}) => {
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    if(lang === '/uz'){
        return(
            <div className="card ya-profile-card">
               <div className="card-body text-center">
                  <h4>Jamg'arma</h4>
                  <div className="mb-3"><img src={qrPicture} className="img-fluid" /></div>
                  <p className="ya-cb-balance">
                  Sizning hisobingiz:
                     <strong>{numberWithSpaces(balance)}</strong>so'm
                  </p>
               </div>
            </div>
        )
    }else if(lang === '/en'){
        return(
            <div className="card ya-profile-card">
               <div className="card-body text-center">
                  <h4>Cumulative</h4>
                  <div className="mb-3"><img src={qrPicture} className="img-fluid" /></div>
                  <p className="ya-cb-balance">
                  Your balance: <strong>{numberWithSpaces(balance)}</strong>sum
                  </p>
               </div>
            </div>
        )
    }else{
        return(
            <div className="card ya-profile-card">
               <div className="card-body text-center">
                  <h4>Накопительная</h4>
                  <div className="mb-3"><img src={qrPicture} className="img-fluid" /></div>
                  <p className="ya-cb-balance">
                  Ваш баланс:
                     <strong>{numberWithSpaces(balance)}</strong>сум
                  </p>
               </div>
            </div>
        )
    }
}

export default ProfileCardQR