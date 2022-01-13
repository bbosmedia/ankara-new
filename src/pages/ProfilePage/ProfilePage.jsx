import React from "react";
import OrderTableItem from "./OrderTableItem";
import ProfileLeftSidebar from "./ProfileLeftSidebar";
import ProfilePageBreadCrumbs from "./ProfilePageBreadCrumbs";
import ProfileTableHead from "./ProfileTableHead";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAccesToken } from "../../redux/ChangeRegister";
import axios from "axios";

const ProfilePage = ({ lang }) => {
  const [orders, setOrders] =  useState(null);
  const accessToken = useSelector(selectAccesToken)
  const fetchOrderList = async() =>{
    try{
        var users = await axios.get('https://api.ankara.uz/order/list', {headers: {'Authorization': 'Bearer ' + accessToken}})
        if(users.status === 200){
            setOrders(users.data)
        }
    }catch(e){
        console.log(e);
    }
  }
  useEffect(() => {
    fetchOrderList()
  }, [])
  return (
    <div className="container-fluid ya-container-fluid">
      <div className="ya-page-block ya-profile-page">
        <ProfilePageBreadCrumbs lang={lang} />
        <div className="row">
          <div className="col-md-4">
            <ProfileLeftSidebar lang={lang} />
          </div>
          <div className="col-md-8">
              {lang === '/uz' && <h3 className="modal-title mb-4">Buyrtmalar tarixi</h3>}
              {lang === '/ru' && <h3 className="modal-title mb-4">История заказов</h3>}
              {lang === '/en' && <h3 className="modal-title mb-4">Order history</h3>}
            <table className="table table-striped history-table">
              <ProfileTableHead lang={lang} />
              {orders && <tbody>
                {orders.map(order =>{
                  return (<OrderTableItem lang={lang} item={order} />)
                })}
              </tbody>}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
