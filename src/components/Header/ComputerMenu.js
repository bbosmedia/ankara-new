import React, { useEffect, useState } from "react";
import ComputerMenuEn from "./ComputerMenu/ComputerMenuEn";
import ComputerMenuRu from "./ComputerMenu/ComputerMenuRu";
import ComputerMenuUz from "./ComputerMenu/ComputerMenuUz";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useSelector } from "react-redux";
import { selectAccesToken } from "../../redux/ChangeRegister";

const ComputerMenu = ({langModel, changeComputerMenu, openCartMenu, changeLogin}) => {
  const [lang, setLang] = useState("/ru");
  const breadcrumbs = useBreadcrumbs();
  const accessToken = useSelector(selectAccesToken)
  const removeClass = () =>{
    document.querySelector('body').classList.add('modal-open')
    changeComputerMenu()
  }

  const addClassCartMenu = () =>{
    document.querySelector('body').classList.add('modal-open')
    openCartMenu()
  }
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
  if (lang === "/uz") {
    return <ComputerMenuUz langModel={langModel} changeComputerMenu={removeClass} openCartMenu={addClassCartMenu} changeLogin={changeLogin} accessToken={accessToken} />;
  } else if (lang === "/en") {
    return <ComputerMenuEn langModel={langModel} changeComputerMenu={removeClass} openCartMenu={addClassCartMenu} changeLogin={changeLogin} accessToken={accessToken} />;
  } else {
    return <ComputerMenuRu langModel={langModel} changeComputerMenu={removeClass} openCartMenu={addClassCartMenu} changeLogin={changeLogin} accessToken={accessToken} />;
  }
};

export default ComputerMenu;
