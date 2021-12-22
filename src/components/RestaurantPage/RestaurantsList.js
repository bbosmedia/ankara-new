import React from "react";
import RestaurantListItem from '../../components/RestaurantPage/RestaurantListItem'
import RestaurantsPageBreadCrumb from '../../components/RestaurantPage/RestaurantsPageBreadCrumb'

const RestaurantsList = ({ lang, restaurants, setPageName }) => {
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
                  <RestaurantListItem
                    lang="/uz"
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
                  <RestaurantListItem
                    lang="/en"
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
    );
  }
};

export default RestaurantsList;