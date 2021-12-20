import React from 'react'
import { Link } from 'react-router-dom'

const ActionsPage = () => {
    return (
<div className="container-fluid ya-container-fluid">
  <div className="ya-page-block">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb ya-breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="nuxt-link-active"> Главная </Link>
        </li>
        <li aria-current="page" className="breadcrumb-item active"> Акции </li>
      </ol>
    </nav>
    <h1 className="ya-group-title">Акции</h1>
    <div className="ya-page-text">
      <div className="ya-actions-list">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <Link to="/actions/79" className="">
                <img alt="В Египет с Японамама!" className="card-img-top lazyLoad isLoaded" src="https://cdn.yaponamama.uz/actions/821638343222.png" />
              </Link>
              <div className="card-body">
                <p className="card-date"> 01.12.2021 </p>
                <h5 className="card-title">
                  <a href="/actions/79" className="">В Египет с Японамама! </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <Link to="/actions/68" className="">
                <img alt="Турбо доставка" className="card-img-top lazyLoad isLoaded" src="https://cdn.yaponamama.uz/actions/7651633687201.jpg" />
              </Link>
              <div className="card-body">
                <p className="card-date"> 08.10.2021 </p>
                <h5 className="card-title">
                  <a href="/actions/68" className="">Турбо доставка </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <Link to="/actions/1" className="">
                <img alt="Персональная скидка для именинника 15%" className="card-img-top lazyLoad isLoaded" src="https://cdn.yaponamama.uz/actions/9291596495895." />
              </Link>
              <div className="card-body">
                <p className="card-date"> 16.11.2021 </p>
                <h5 className="card-title">
                  <a href="/actions/1" className="">Персональная скидка для именинника 15% </a>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <Link to="/actions/44" className="">
                <img alt="Приносим новое! Yapona Market!" className="card-img-top lazyLoad isLoaded" src="https://cdn.yaponamama.uz/actions/511599051487.jpg" />
              </Link>
              <div className="card-body">
                <p className="card-date"> 10.06.2021 </p>
                <h5 className="card-title">
                  <Link to="/actions/44" className="">Приносим новое! Yapona Market! </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ActionsPage
