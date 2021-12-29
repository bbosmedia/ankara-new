import React from "react";
import { Link } from "react-router-dom";

const FooterEn = () => {
  return (
    <div className="ya-footer">
      <div className="container-fluid ya-container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-4">
            <div className="ya-footer-logo mb-5">
              <Link
                to="/en"
                aria-current="page"
                className="nuxt-link-exact-active nuxt-link-active"
              >
                <img
                  height="65"
                  src="/images/logo.svg"
                  className="lazyLoad isLoaded"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-9 col-lg-8">
            <div className="d-flex align-items-start justify-content-between ya-footer-list">
              <ul className="ya-footer-menu list-unstyled">
                <li className="fm-item">
                  <Link to="/en/about" >
                    About Us
                  </Link>
                </li>
                <li className="fm-item">
                  <Link to="/en/menu" >
                    Menu
                  </Link>
                </li>
                <li className="fm-item">
                  <Link to="/en/actions" >
                    Sales
                  </Link>
                </li>
                <li className="fm-item">
                  <Link to="/en/restaurants" >
                    Restaurants
                  </Link>
                </li>
                <li className="fm-item">
                  <Link to="/en/delivery" >
                    Delivery
                  </Link>
                </li>
              </ul>
              <ul className="ya-footer-menu list-unstyled">
                <li className="fm-item">
                  <Link to="/en/gallery">GALLERY</Link>
                </li>
                <li className="fm-item">
                  <Link to="/en/contacts">Contacts</Link>
                </li>
                <li className="fm-item">
                  <Link to="/en/offer">Public Offer</Link>
                </li>
                <li className="fm-item">
                  <Link to="/en/rules">RESTAURANT VISITING RULES</Link>
                </li>
              </ul>
              <div className="ya-footer-detail text-right">
                <div>
                  <p className="ya-footer-phone mb-0">
                    <a href="tel:1089">1089</a>
                  </p>
                  <p className="ya-footer-time">from 10:00 to 02:00</p>
                </div>
                <div className="ya-social-list">
                  <p>Share on social networks</p>
                  <ul className="ya-social">
                    <li>
                      <a
                        href="https://www.facebook.com/yaponamama.uz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          loading="lazy"
                          src="/images/socials/facebook.svg"
                          alt="Facebook"
                          className="img-fluid lazyLoad isLoaded"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/yaponamamabot"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          loading="lazy"
                          src="/images/socials/telegram.svg"
                          className="img-fluid lazyLoad isLoaded"
                          alt="Telegram"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UCqTL4ti1tPw0l3sZjb_h2gA/featured"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          loading="lazy"
                          src="/images/socials/youtube.svg"
                          className="img-fluid lazyLoad isLoaded"
                          alt="Youtube"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/yaponamama.uz"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          loading="lazy"
                          src="/images/socials/instagram.svg"
                          className="img-fluid lazyLoad isLoaded"
                          alt="Instagram"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEn;
