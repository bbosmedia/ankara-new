import React, { useState, useEffect } from "react";
import OrderPageHeader from "./OrderPageHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccesToken, selectUserdata } from "../../redux/ChangeRegister";
import OrderTopLeft from "./OrderTopLeft";
import OrderPageRight from "./OrderPageRight";
import OrderPageBottom from "./OrderPageBottom";

const OrderPage = ({ lang }) => {
    const accessToken = useSelector(selectAccesToken);
    const userData = useSelector(selectUserdata);
    let { id } = useParams();
    const [order, setOrder] = useState(null);
    const fetchOrderItems = async() =>{
        try{
            var items = await axios.get('https://api.ankara.uz/order/view/' + id, {headers: {'Authorization': 'Bearer ' + accessToken}})
            if(items.status === 200){
                setOrder(items.data)
            }
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchOrderItems();
    }, [id])

    if(order ===  null) return null;
  return (
    <div className="container-fluid ya-container-fluid">
      <div className="ya-page-block ya-profile-page">
        <OrderPageHeader lang={lang} />
        <div className="ya-order-detail">
          {lang === '/uz' && <h1 className="modal-title mb-4">Burutma #{order.id}</h1>}
          {lang === '/en' && <h1 className="modal-title mb-4">Order #{order.id}</h1>}
          {lang === '/ru' && <h1 className="modal-title mb-4">Заказ #{order.id}</h1>}
          
          <div className="row mb-4">
            <OrderTopLeft lang={lang} userData={userData} date={order.created_at} />
            <OrderPageRight lang={lang} order={order} />
          </div>
         <OrderPageBottom lang={lang} items={order.items} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
