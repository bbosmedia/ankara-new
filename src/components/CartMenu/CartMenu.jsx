import React, { useState, useEffect } from "react";
import "./cartMenu.css";
import { useSelector} from "react-redux";
import {
  selectCart
} from "../../redux/CartRedux";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import YesProducts from "./YesProducts";
import NoProduct from "./NoProduct";

const CartMenu = ({ openCartMenu }) => {
  const [lang, setLang] = useState("/ru");
  const breadcrumbs = useBreadcrumbs();
  const items = useSelector(selectCart);
  const changeCart = () => {
    openCartMenu();
    document.querySelector("body").classList.remove("modal-open");
  };
  useEffect(() => {
    if (breadcrumbs.length > 1) {
      if (breadcrumbs[1].key === "/uz") {
        setLang("/uz");
      } else if (breadcrumbs[1].key === "/en") {
        setLang("/en");
      } else {
        setLang("/ru");
      }
    } else {
      setLang("/ru");
    }
  }, [breadcrumbs]);
  return (
    <div id="cartModal___BV_modal_outer_" className="cart-menu">
      <div
        id="cartModal"
        role="dialog"
        aria-labelledby="cartModal___BV_modal_title_"
        aria-describedby="cartModal___BV_modal_body_"
        className="modal fade show modal right fade cart-modal"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-md">
          <div id="cartModal___BV_modal_content_" className="modal-content">
            <header id="cartModal___BV_modal_header_" className="modal-header">
              {lang === "/uz" && (
                <h5 id="cartModal___BV_modal_title_" className="modal-title">
                  Savatcha
                </h5>
              )}
              {lang === "/ru" && (
                <h5 id="cartModal___BV_modal_title_" className="modal-title">
                  Корзина
                </h5>
              )}
              {lang === "/en" && (
                <h5 id="cartModal___BV_modal_title_" className="modal-title">
                  Cart
                </h5>
              )}
              <button
                type="button"
                aria-label="Close"
                onClick={changeCart}
                className="close"
              >
                ×
              </button>
            </header>
            {items.length > 0 && <YesProducts items={items} lang={lang} changeCart={changeCart} />}
            {items.length === 0 && (
              <div id="cartModal___BV_modal_body_" className="modal-body">
                <div className="cart-modal-content">
                  <NoProduct lang={lang} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="cartModal___BV_modal_backdrop_" className="modal-backdrop"></div>
    </div>
  );
};

export default CartMenu;
