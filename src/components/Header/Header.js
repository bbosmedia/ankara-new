import React from "react";
import { Link } from "react-router-dom";
import ComputerMenu from "./ComputerMenu";
import "./Header.css";
import MobileMenu from "./MobileMenu";

const Header = ({langModel, changeComputerMenu, openCartMenu, changeLogin}) => {
  return (
    <>
      <div id="header" className="sticky-top">
        <MobileMenu />
        <ComputerMenu langModel={langModel} changeComputerMenu={changeComputerMenu} openCartMenu={openCartMenu} changeLogin={changeLogin}/>
      </div>
    </>
  );
};

export default Header;
