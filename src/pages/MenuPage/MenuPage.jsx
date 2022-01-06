import React, {useState, useEffect} from 'react';
import MenuPageNavigation from "./MenuPageNavigation";
import MenuPageProducts from './MenuPageProducts';
import MenuPageHeader from './MenuPageHaeder'

const MenuPage = ({ lang }) => {
  
  return (
    <div key="id" className="container-fluid ya-container-fluid">
      <div className="ya-page-block">
        <MenuPageHeader />
        <div className="ya-page-text">
          <MenuPageNavigation lang={lang} />
          <MenuPageProducts lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
