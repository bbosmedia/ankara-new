import React from 'react'
import { Link } from 'react-router-dom'
import RestaurantListItem from '../../components/RestaurantPage/RestaurantListItem'
import RestaurantsPageBreadCrumb from '../../components/RestaurantPage/RestaurantsPageBreadCrumb'

const RestaurantsPage = () => {
    return (
        <div>
            <RetaurantsList />
        </div>
    )
}

const RetaurantsList = (lang, restaurants) =>{
    if(lang === '/uz'){
        return (
<div className="ya-restaurants">
   <div className="ya-restaurant-listview">
      <div className="container-fluid ya-container-fluid">
         <div className="ya-page-block">
         <RestaurantsPageBreadCrumb
             lang={lang}
              />
            <div className="d-flex justify-content-between">
               <h1 className="ya-group-title">Рестораны</h1>
               <div className="ya-res-cn"><button className="btn btn-default ya-btn-gray">
                  Карта
                  </button> <button className="btn btn-default ya-btn-red">
                  Список
                  </button>
               </div>
            </div>
            <div className="ya-restaurants-list">
               <table className="table table-hover">
                  <tr >
                     <td >
                        <p ><a href="/restaurants/1" className="ya-restaurant-link">Yaponamama Шота</a></p>
                        <p className="ya-restaurant-ld"><span >Адрес:</span><br />Яккасарайский район, улица Ш. Руставели 69а/3
                        </p>
                     </td>
                     <td >
                        <p className="ya-restaurant-ld"><span >Телефон:</span><br /> +99898-251-12-13; +99871-253-12-13
                        </p>
                        <p className="ya-restaurant-ld"><span >Время работы:</span><br />10:00 - 22:00
                        </p>
                     </td>
                     <td className="text-right">
                        <p className="mb-4"><img height="30" className="mr-2 lazyLoad isLoaded" src="/_nuxt/img/ic_wifi.fce2aa5.svg" /> <img height="30" className="mr-2 lazyLoad isLoaded" src="/_nuxt/img/ic_parking.d9f87ef.svg" /> <img height="30" src="/_nuxt/img/ic_360w.43e7c40.svg" className="lazyLoad isLoaded" /></p>
                        <div ><a href="/restaurants/1" className="ya-restaurant-more">Подробнее о филиале</a></div>
                     </td>
                  </tr>
               </table>
            </div>
         </div>
      </div>
   </div>
</div>
        )
    }else if(lang === '/en'){
        return (<div className="ya-restaurants">
        <div className="ya-restaurant-listview">
           <div className="container-fluid ya-container-fluid">
              <div className="ya-page-block">
              <RestaurantsPageBreadCrumb
             lang={lang}
              />
                 <div className="d-flex justify-content-between">
                    <h1 className="ya-group-title">Рестораны</h1>
                    <div className="ya-res-cn"><button className="btn btn-default ya-btn-gray">
                       Карта
                       </button> <button className="btn btn-default ya-btn-red">
                       Список
                       </button>
                    </div>
                 </div>
                 <div className="ya-restaurants-list">
                    <table className="table table-hover">
                       <RestaurantListItem  />
                    </table>
                 </div>
              </div>
           </div>
        </div>
     </div>)
    }else{
        return (
            <div className="ya-restaurants">
   <div className="ya-restaurant-listview">
      <div className="container-fluid ya-container-fluid">
         <div className="ya-page-block">
             <RestaurantsPageBreadCrumb
             lang={lang}
              />
            <div className="d-flex justify-content-between">
               <h1 className="ya-group-title">Рестораны</h1>
               <div className="ya-res-cn"><button className="btn btn-default ya-btn-gray">
                  Карта
                  </button> <button className="btn btn-default ya-btn-red">
                  Список
                  </button>
               </div>
            </div>
            <div className="ya-restaurants-list">
               <table className="table table-hover">
                    <RestaurantListItem
                    lang="/ru"
                    name="YAPONAMAMA ШОТА"
                    address="Яккасарайский район, улица Ш. Руставели 69а/3"
                    phoneNumber="+99898-251-12-13; +99871-253-12-13"
                    time="10:00 - 22:00"
                    id="1"
                     />
               </table>
            </div>
         </div>
      </div>
   </div>
</div>
        )
    }
}




export default RestaurantsPage
