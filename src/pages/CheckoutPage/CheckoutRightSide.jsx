import React from "react";
import { useSelector } from "react-redux";
import { numberWithSpaces } from "../../functionsAnkara";
import { selectCartTotalAmount, selectCart } from "../../redux/CartRedux";



const CheckoutRightSide = ({ lang }) => {
  const totalAmount = useSelector(selectCartTotalAmount);
  const items = useSelector(selectCart);
  console.log(items);
  return (
    <div key={lang} className="col-md-4">
      {lang === "/ru" && <h3 className="sub-title mb-4">Ваш заказ</h3>}
      {lang === "/en" && <h3 className="sub-title mb-4">Your order</h3>}
      {lang === "/uz" && (<h3 className="sub-title mb-4">Sizning buyrtmangiz</h3>)}
      {items.map((item) => (
        <ProductCard key={item.id.toString} lang={lang} item={item} />
      ))}

      <div className="checkout-total d-flex justify-content-between">
        {lang === "/ru" && <p>Всего к оплате:</p>}
        {lang === "/en" && <p>Total payable:</p>}
        {lang === "/uz" && <p>Jami to'lov:</p>}
        <p className="font-weight-bold">
          {numberWithSpaces(totalAmount)}
          {lang === "/ru" && " сум"}
          {lang === "/en" && " sum"}
          {lang === "/uz" && " so'm"}
        </p>
      </div>
    </div>
  );
};

function ProductCard({ lang, item }) {
  return (
    <div key={item.id} className="mb-3">
      <div className="card mc-item checkout-items">
        {lang === "/ru" && (
          <img
            alt={item.nameRu}
            className="card-img lazyLoad isLoaded"
            src={item.thumbnail}
          />
        )}
        {lang === "/en" && (
          <img
            alt={item.nameEn}
            className="card-img lazyLoad isLoaded"
            src={item.thumbnail}
          />
        )}
        {lang === "/uz" && (
          <img
            alt={item.nameUz}
            className="card-img lazyLoad isLoaded"
            src={item.thumbnail}
          />
        )}
        <div className="card-body">
          {lang === "/uz" && <h5 className="card-title">{item.nameUz}</h5>}
          {lang === "/ru" && <h5 className="card-title">{item.nameRu}</h5>}
          {lang === "/en" && <h5 className="card-title">{item.nameEn}</h5>}
          <div className="d-flex align-items-center justify-content-between">
            <p className="card-price">
              {item.cartQuantity} x&nbsp;
              {numberWithSpaces(item.price)} =&nbsp;
              {numberWithSpaces(item.cartQuantity * item.price)}
              {lang === "/ru" && " сум"}
              {lang === "/en" && " sum"}
              {lang === "/uz" && " so'm"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutRightSide;
