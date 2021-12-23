import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RestaurantListItem from '../../components/RestaurantPage/RestaurantListItem'
import RestaurantsPageBreadCrumb from '../../components/RestaurantPage/RestaurantsPageBreadCrumb'

const RestaurantsList = ({ lang, setPageName }) => {
  const [restaurantlist, setRestaurantlist] =  useState([]);

  const fetchRestauranList = async() =>{
      try{
          var items = await axios.get('https://api.ankara.uz/restaurants')
          setRestaurantlist(items.data);
          console.log(items.data);
      }catch(e){
          console.log(e);
      }
  }

  useEffect(() => {
    fetchRestauranList()
  }, [lang])


  if (lang === "/uz") {
    return (
      <div className="ya-restaurants">
        <div className="ya-restaurant-listview">
          <div className="container-fluid ya-container-fluid">
            <div className="ya-page-block">
              <RestaurantsPageBreadCrumb lang={lang} />
              <div className="d-flex justify-content-between">
                <h1 className="ya-group-title">Restoranlar</h1>
                <div className="ya-res-cn">
                  <button
                    onClick={() => setPageName()}
                    className="btn btn-default ya-btn-gray"
                  >
                    Xarita
                  </button>{" "}
                  <button className="btn btn-default ya-btn-red">
                    Ro'yxat
                  </button>
                </div>
              </div>
              <div className="ya-restaurants-list">
                <table className="table table-hover">
                  {restaurantlist.map(item =>
                     <RestaurantListItem
                     key={item.id}
                     lang="/uz"
                     name={item.titleUz}
                     address={item.addressUz}
                     phoneNumber={item.phone}
                     time={item.workingTime}
                     id={item.id}
                   />
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (lang === "/en") {
    return (
      <div className="ya-restaurants">
        <div className="ya-restaurant-listview">
          <div className="container-fluid ya-container-fluid">
            <div className="ya-page-block">
              <RestaurantsPageBreadCrumb lang={lang} />
              <div className="d-flex justify-content-between">
                <h1 className="ya-group-title">Restaurants</h1>
                <div className="ya-res-cn">
                  <button
                    className="btn btn-default ya-btn-gray"
                    onClick={() => setPageName()}
                  >
                    Map
                  </button>{" "}
                  <button className="btn btn-default ya-btn-red">List</button>
                </div>
              </div>
              <div className="ya-restaurants-list">
                <table className="table table-hover">
                {restaurantlist.map(item =>
                     <RestaurantListItem
                     key={item.id}
                     lang="/en"
                     name={item.titleEn}
                     address={item.addressEn}
                     phoneNumber={item.phone}
                     time={item.workingTime}
                     id={item.id}
                   />
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ya-restaurants">
        <div className="ya-restaurant-listview">
          <div className="container-fluid ya-container-fluid">
            <div className="ya-page-block">
              <RestaurantsPageBreadCrumb lang={lang} />
              <div className="d-flex justify-content-between">
                <h1 className="ya-group-title">Рестораны</h1>
                <div className="ya-res-cn">
                  <button
                    className="btn btn-default ya-btn-gray"
                    onClick={() => setPageName()}
                  >
                    Карта
                  </button>{" "}
                  <button className="btn btn-default ya-btn-red">Список</button>
                </div>
              </div>
              <div className="ya-restaurants-list">
                <table className="table table-hover">
                {restaurantlist.map(item =>
                     <RestaurantListItem
                     key={item.id}
                     lang="/ru"
                     name={item.titleRu}
                     address={item.addressRu}
                     phoneNumber={item.phone}
                     time={item.workingTime}
                     id={item.id}
                   />
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RestaurantsList;