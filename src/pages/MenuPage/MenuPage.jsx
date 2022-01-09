import React, {useState, useEffect} from 'react';
import MenuPageNavigation from "./MenuPageNavigation";
import MenuPageProducts from './MenuPageProducts';
import MenuPageHeader from './MenuPageHaeder'
import { useSelector } from 'react-redux'
import {selectFoodMenu} from '../../redux/FoodMenu'

const MenuPage = ({ lang }) => {
  const minimenu = useSelector(selectFoodMenu)
  return (
    <div key="id" className="container-fluid ya-container-fluid">
      <div className="ya-page-block">
        <MenuPageHeader />
        <div className="ya-page-text">
          {minimenu.length > 0 && <MenuPageNavigation lang={lang} minimenu={minimenu} />}
          {minimenu.length > 0 && <MenuPageProducts lang={lang} menuitems={minimenu} />}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
