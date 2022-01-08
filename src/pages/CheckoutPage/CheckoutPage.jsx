import React from 'react'
import CheckoutPageBreadcrumbs from './CheckoutPageBreadcrumbs'
import CheckoutRightSide from './CheckoutRightSide'
import ChekoutLeftSide from './ChekoutLeftSide'

const CheckoutPage = ({lang}) => {
    return (
        <div  className="container-fluid ya-container-fluid">
   <div  className="ya-page-block checkout">
    <CheckoutPageBreadcrumbs lang={lang} />
      {lang === '/ru' && <h1  className="title">Оформление заказа</h1>}
      {lang === '/en' && <h1  className="title">Checkout</h1>}
      {lang === '/uz' && <h1  className="title">Buyrtmani rasmiylashtirish</h1>}
      <div  className="row">
         <ChekoutLeftSide lang={lang} />
         <CheckoutRightSide lang={lang} />
      </div>
   </div>
</div>
    )
}

export default CheckoutPage
