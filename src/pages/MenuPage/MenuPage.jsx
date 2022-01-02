import React from "react";
import { Link } from "react-router-dom";

const MenuPage = ({ lang }) => {
  return (
    <div className="container-fluid ya-container-fluid">
      <div className="ya-page-block">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb ya-breadcrumb">
            <li className="breadcrumb-item">
              {lang === "/ru" && (
                <Link to="/" className="nuxt-link-active">
                  Главная
                </Link>
              )}
              {lang === "/en" && (
                <Link to="/en" className="nuxt-link-active">
                  
                  Home
                </Link>
              )}
              {lang === "/uz" && (
                <Link to="/en" className="nuxt-link-active">
                  
                  Bosh Sahifa
                </Link>
              )}
            </li>
            {lang === "/ru" && (
              <li aria-current="page" className="breadcrumb-item active">
                
                Меню
              </li>
            )}
            {lang === "/uz" && (
              <li aria-current="page" className="breadcrumb-item active">
                
                Menu
              </li>
            )}
            {lang === "/en" && (
              <li aria-current="page" className="breadcrumb-item active">
                
                Menu
              </li>
            )}
          </ol>
        </nav>
        {lang === "/ru" && <h1 className="ya-group-title">Меню</h1>}
        {lang === "/uz" && <h1 className="ya-group-title">Menu</h1>}
        {lang === "/en" && <h1 className="ya-group-title">Menu</h1>}
        <div className="ya-page-text">
          <nav className="navbar navbar-expand navbar-light ya-menu-nav">
            <div className="collapse navbar-collapse">
              <div className="navbar-nav">
                <a
                  href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7"
                  className="nav-item nav-link nuxt-link-exact-active active"
                  aria-current="page"
                >
                  New items
                </a>
               
              </div>
            </div>
          </nav>
          <section className="pt-3">
            <div className="ya-menu-group py-4">
              <h1 className="ya-menu-title text-center mb-5">New items</h1>
              <div className="row ml-0 mr-0">
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/6891524b-284d-4e7c-8abf-4c1b43f999b4"
                        
                      >
                        <img
                          alt="Soup with salmon"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632825395.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/6891524b-284d-4e7c-8abf-4c1b43f999b4"
                            
                          >
                            Soup with salmon
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Sliced tender salmon with vegetables in a fish broth.
                          Ingredients: Salmon Fish broth Vegetable oil Potato
                          Onion Carrot Bulgarian pepper Black pepper Green onion
                          Greens
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">25 000</p>
                          <div className="ya-product-controls">
                            <a href="#" className="ya-product-minus">
                              -
                            </a>
                            <span className="ya-product-quantity">1</span>
                            <a href="#" className="ya-product-plus">
                              +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/da6019e6-9d73-4a72-a173-2e4e20e2f50b"
                        
                      >
                        <img
                          alt="Sheema salad"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632834517.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/da6019e6-9d73-4a72-a173-2e4e20e2f50b"
                            
                          >
                            Sheema salad
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Harmonious combination of fried vegetables and chicken
                          with a piquant spice, seasoned with crispy potato pie.
                          Ingredients: Fried chicken Eggplant Tomatoes Bulgarian
                          pepper Hot sauce AROY-D sauce Green onions Cilantro
                          Potato pie
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">35 000</p>
                          <div className="ya-product-controls">
                            <a href="#" className="ya-product-minus">
                              -
                            </a>
                            <span className="ya-product-quantity">1</span>
                            <a href="#" className="ya-product-plus">
                              +
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/a86bd091-b732-4fd1-8ed6-95b3bc1a1d97"
                        
                      >
                        <img
                          alt="Hot Ocean salad"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632837254.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/a86bd091-b732-4fd1-8ed6-95b3bc1a1d97"
                            
                          >
                            Hot Ocean salad
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Salmon and eel in a crispy breading with a spicy sauce
                          and salad leaves - a light gourmet appetizer for a
                          hearty dinner. Ingredients: Fish croquettes Salad mix
                          Cucumber Radish Jalapeno pepper Soy sauce Aioli sauce
                          Sour cream Mayonnaise Garlic Greens
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">45 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/0f0b752e-1f5d-41f6-83c0-19cbf9c84ccb"
                        
                      >
                        <img
                          alt="Kanzo salad"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632836964.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/0f0b752e-1f5d-41f6-83c0-19cbf9c84ccb"
                            
                          >
                            Kanzo salad
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          A gourmet salad with chicken liver and golden fried
                          potatoes with a scattering of vegetables and herbs
                          will provide a portion of pleasure during your meal.
                          Ingredients: Chicken liver Potato Bulgarian pepper
                          Salad mix Vegetable oil Special sauce Quail eggs
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">35 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/2d8b89c5-6da1-4981-b5ac-039d45fb96c8"
                        
                      >
                        <img
                          alt="Eggplant in honey and soy sauce"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632835064.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/2d8b89c5-6da1-4981-b5ac-039d45fb96c8"
                            
                          >
                            Eggplant in honey and soy sauce
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          A skillfully designed combination of vegetables with
                          hints of piquant sweetness and rucola aroma will leap
                          up with bright emotions of bliss. Ingredients:
                          Eggplant Tomatoes Bulgarian pepper Honey-soy sauce
                          Rucola Mix salad Sesame
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">35 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/1c6e30ef-5ede-4c85-94e8-43d3afe9fb97"
                        
                      >
                        <img
                          alt="Three samurai"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632835420.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/1c6e30ef-5ede-4c85-94e8-43d3afe9fb97"
                            
                          >
                            Three samurai
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          A bright and sunny pancake dish with three types of
                          fillings will bring color to gloomy autumn days.
                          Ingredients: Multicolored pancakes Chicken filling
                          Beef filling Liver filling Green onions Salad mix
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">60 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/ad7ed361-c95e-4270-b094-3704c8dc942b"
                        
                      >
                        <img
                          alt="Glass noodles with beef"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632825682.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/ad7ed361-c95e-4270-b094-3704c8dc942b"
                            
                          >
                            Glass noodles with beef
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Sparks of glass noodles in gold fried vegetables with
                          the addition of spicy sauces will leave an
                          unforgettable delicious aftertaste. Ingredients:
                          Pickled beef Kharusame glass noodles Vegetable oil
                          Sesame oil Onion Mix vegetables Oyster sauce Special
                          sauce
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">45 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/d7af50bd-9e85-49b3-9097-b266739b4ad1"
                        
                      >
                        <img
                          alt="Udon with sweet and sour sauce"
                          className="card-img-top lazyLoad isLoaded"
                          src="https://cdn.yaponamama.uz/products/thumbs/102_1632835666.jpg"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/d7af50bd-9e85-49b3-9097-b266739b4ad1"
                            
                          >
                            Udon with sweet and sour sauce
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          The new, original recipe of the familiar dish will
                          definitely change your idea of WOK noodles.
                          Ingredients: Chicken fillet Udon noodles Vegetable oil
                          Sesame oil Onion Vegetable mix Oyster sauce Sweet and
                          sour sauce Cilantro
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">35 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/eefbba1c-d2a2-4142-9d93-178daf08c9b2"
                        
                      >
                        <img
                          data-src="https://cdn.yaponamama.uz/products/thumbs/102_1632828971.jpg"
                          alt="Creamy mousse"
                          className="card-img-top lazyLoad"
                          src="/images/default.png"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/eefbba1c-d2a2-4142-9d93-178daf08c9b2"
                            
                          >
                            Creamy mousse
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Creamy curd dessert with a taste of lightness will
                          give tenderness. Ingredients: Cream Curd cream Vanilla
                          extract Powdered sugar
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">27 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/482925ca-7d75-4aab-9fa8-36e12c18fa25"
                        
                      >
                        <img
                          data-src="https://cdn.yaponamama.uz/products/thumbs/102_1632825523.jpg"
                          alt="Creamy peach-mango mousse"
                          className="card-img-top lazyLoad"
                          src="/images/default.png"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/482925ca-7d75-4aab-9fa8-36e12c18fa25"
                            
                          >
                            Creamy peach-mango mousse
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Airy cream with biscuit layer and fruit jelly.
                          Ingredients: Cream Curd cream Biscuit Peach-mango
                          jelly Powdered sugar
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">27 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-3 px-0">
                  <div className="ya-product-item">
                    <div className="card hvr-grow w-100">
                      <a
                        href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/5a4be6c1-fcf0-40d2-b81a-2300d359b34a"
                        
                      >
                        <img
                          data-src="https://cdn.yaponamama.uz/products/thumbs/102_1632836252.jpg"
                          alt="Shokoladli muss"
                          className="card-img-top lazyLoad"
                          src="/images/default.png"
                        />
                      </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          <a
                            href="/en/menu/c47599bc-4a96-495a-b610-f7b89dddd2e7/5a4be6c1-fcf0-40d2-b81a-2300d359b34a"
                            
                          >
                            Shokoladli muss
                          </a>
                        </h5>
                        <p className="card-text mb-4">
                          Delicate chocolate dessert will melt your heart this
                          autumn. Ingredients: Cream Curd cream Vanilla extract
                          Milk Powdered milk Powdered sugar Chocolate
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <p className="card-price">27 000</p>
                          <a href="#" className="btn btn-danger btn-want">
                            Want
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section></section>
          </section>
        </div>
      </div>
      <a href="#" className="btn-floating btn-lg red waves-effect waves-light">
        <i className="ya-arrow-up"></i>
      </a>
    </div>
  );
};

export default MenuPage;
