import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileInfoCard from './ProfileInfoCard'
import ProfilePageBreadCrumbs from './ProfilePageBreadCrumbs'

const ProfilePage = ({lang}) => {
    return (
        <div className="container-fluid ya-container-fluid">
   <div className="ya-page-block ya-profile-page">
      <ProfilePageBreadCrumbs lang={lang} />
      <div className="row">
         <div className="col-md-4">
            <ProfileCard lang={lang} name="Abbos Nurgulshanov" imgLink="https://yaponamama.uz/_nuxt/img/ic_avatar.ad6a014.png" />
            <ProfileInfoCard lang={lang} phoneNumber="+998977080497" dateBirth="10.04.1997" dateRegistarion="05.01.2022" />
            <div className="card ya-profile-card">
               <div className="card-body text-center">
                  <h4>Накопительная</h4>
                  <div className="mb-3"><img src="https://www.researchgate.net/profile/Hafiza-Abas/publication/288303807/figure/fig1/AS:311239419940864@1451216668048/An-example-of-QR-code.png" className="img-fluid" /></div>
                  <p className="ya-cb-balance">
                     Ваш баланс:
                     <strong>0</strong> сум
                  </p>
               </div>
            </div>
         </div>
         <div className="col-md-8">
            <h3 className="modal-title mb-4">История заказов</h3>
            <table className="table table-striped history-table">
               <thead>
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Дата</th>
                     <th scope="col">Способ оплаты</th>
                     <th scope="col">Статус</th>
                     <th scope="col" className="text-right">Сумма</th>
                  </tr>
               </thead>
               <tbody></tbody>
            </table>
         </div>
      </div>
   </div>
</div>
    )
}

export default ProfilePage
