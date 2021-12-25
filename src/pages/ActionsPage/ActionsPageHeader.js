import React from "react";
import { Link } from 'react-router-dom';

const ActionsPageHeader = ({ lang }) => {
  if (lang === "/en") {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/en" className="nuxt-link-active">
                Home
              </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              Sales
            </li>
          </ol>
        </nav>
        <h1 className="ya-group-title">Sales</h1>
      </>
    );
  } else if (lang === "/uz") {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/uz" className="nuxt-link-active">

                Bosh sahifa
              </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">

              Aksiyalar
            </li>
          </ol>
        </nav>
        <h1 className="ya-group-title">Aksiyalar</h1>
      </>
    );
  } else {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="nuxt-link-active">

                Главная
              </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">

              Акции
            </li>
          </ol>
        </nav>
        <h1 className="ya-group-title">Акции</h1>
      </>
    );
  }
};

export default ActionsPageHeader;
