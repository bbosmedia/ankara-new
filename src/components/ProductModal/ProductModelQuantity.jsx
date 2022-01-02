import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, selectCart, decreaseCart } from "../../redux/CartRedux";

const ProductModelQuantity = ({ items, lang }) => {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  const [qunatity, setQunatity] = useState(0);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  useEffect(() => {
    const itemIndex = cart.findIndex((product) => product.id === items.id);
    if (itemIndex >= 0) {
      setQunatity(cart[itemIndex].cartQuantity);
    } else {
      setQunatity(0);
    }
  }, [cart]);
  return (
    <div className="d-flex justify-content-between ya-product-modal-params" style={{alignItems: 'center'}}>
        {lang === "" && <p className="ya-product-modal-price">{numberWithSpaces(items.price)} сум</p>}
        {lang === "/uz" && <p className="ya-product-modal-price">{numberWithSpaces(items.price)} so'm</p>}
        {lang === "/en" && <p className="ya-product-modal-price">{numberWithSpaces(items.price)} sum</p>}
      {qunatity === 0 && 
        <>
          {lang === "" && 
            <button onClick={() => dispatch(addToCart(items))} className="btn btn-danger btn-want">Хочу</button>
          }
          {lang === "/uz" && (
            <button onClick={() => dispatch(addToCart(items))} className="btn btn-danger btn-want">Hohlayman</button>
          )}
          {lang === "/en" && (
            <button onClick={() => dispatch(addToCart(items))} className="btn btn-danger btn-want">Want</button>
          )}
        </>
      }
      {qunatity > 0 && (
        <div className="ya-product-controls">
          <button onClick={() => dispatch(decreaseCart(items))} className="ya-product-minus">
            -
          </button>{" "}
          <span className="ya-product-quantity">{qunatity}</span>{" "}
          <button onClick={() => dispatch(addToCart(items))} className="ya-product-plus">
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductModelQuantity;
