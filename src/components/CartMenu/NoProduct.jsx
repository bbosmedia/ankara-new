import React from "react";

const NoProduct = ({lang}) => {
  if (lang === "/uz") {
    return (
      <div class="empty-cart">
        Sizning savatchangiz bo'sh. Iltimos maxsulotlardan qo'shing
      </div>
    );
  } else if (lang === "/en") {
    return (
      <div class="empty-cart">Your basket is empty. Please add products</div>
    );
  } else {
    return (
      <div class="empty-cart">
        Ваша корзина пуста. Пожалуйста, добавьте продукты
      </div>
    );
  }
};

export default NoProduct;
