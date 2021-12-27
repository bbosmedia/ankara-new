import React, { useEffect, useState } from "react";
import ComputerMenuEn from "./ComputerMenu/ComputerMenuEn";
import ComputerMenuRu from "./ComputerMenu/ComputerMenuRu";
import ComputerMenuUz from "./ComputerMenu/ComputerMenuUz";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const ComputerMenu = ({langModel}) => {
  const [lang, setLang] = useState("/ru");
  const breadcrumbs = useBreadcrumbs();
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
    return <ComputerMenuUz langModel={langModel} />;
  } else if (lang === "/en") {
    return <ComputerMenuEn langModel={langModel}/>;
  } else {
    return <ComputerMenuRu langModel={langModel} />;
  }
};

export default ComputerMenu;
