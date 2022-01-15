import React, { useState, useEffect } from "react";
import OrderPageHeader from "./OrderPageHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAccesToken, selectUserdata } from "../../redux/ChangeRegister";
import OrderTopLeft from "./OrderTopLeft";

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
                console.log(items.data)
            }
        }catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        fetchOrderItems();
    }, [id, lang])

    if(order ===  null) return null;
  return (
    <div className="container-fluid ya-container-fluid">
      <div className="ya-page-block ya-profile-page">
        <OrderPageHeader lang={lang} />
        <div className="ya-order-detail">
          <h1 className="modal-title mb-4">Заказ #800774</h1>
          <div className="row mb-4">
            <OrderTopLeft lang={lang} userData={userData} date={order.created_at} />
            <div className="col-md-6">
              <table className="table table-striped">
                <tr>
                  <td className="text-nowrap">Сумма:</td> <td>110 000 сум</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Способ оплаты:</td> <td>Click</td>
                </tr>
                <tr>
                  <td className="text-nowrap">Статус:</td> <td>Отменена</td>
                </tr>
              </table>
            </div>
          </div>
          <h3 className="modal-title mb-4">Продукты</h3>
          <table className="table table-striped">
            <tr>
              <th width="50">#</th> <th>Продукт</th>
              <th className="text-center">Количество</th>
              <th className="text-right">Цена</th>
              <th className="text-right">Сумма</th>
            </tr>
            <tr>
              <td>1</td> <td>(Турбо) Цезарь</td>
              <td className="text-center">2</td>
              <td className="text-right">37 000 сум</td>
              <td className="text-right">74 000 сум</td>
            </tr>
            <tr>
              <td>2</td> <td>(Турбо) Чука сарада</td>
              <td className="text-center">1</td>
              <td className="text-right">36 000 сум</td>
              <td className="text-right">36 000 сум</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
