import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GalleryPageCard from "../../components/GalleryPageWidgets/GalleryPageCard";

const GallerPage = ({ lang }) => {
  const [galitem, setGalitem] = useState([]);
  const fetchGalItems = async () => {
    try {
      var items = await axios.get("https://api.ankara.uz/gallery");
      setGalitem(items.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalItems();
  }, [lang]);
  if (lang === "/en") {
    return (
      <div key={lang} className="container-fluid ya-container-fluid">
        <div className="ya-page-block">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ya-breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/en/" className="nuxt-link-active">
                  Home
                </Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Gallery
              </li>
            </ol>
          </nav>
          <h1 className="ya-group-title">Gallery</h1>
          <div className="ya-gallery-grid">
            {galitem.map((item) => (
              <GalleryPageCard
                name={item.titleEn}
                id={item.id}
                thumbnail={item.thumbnail}
                lang="/en"
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else if (lang === "/uz") {
    return (
      <div className="container-fluid ya-container-fluid">
        <div className="ya-page-block">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ya-breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/uz/" className="nuxt-link-active">
                  Bosh sahifa
                </Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Galereya
              </li>
            </ol>
          </nav>
          <h1 className="ya-group-title">Galereya</h1>
          <div className="ya-gallery-grid">
            {galitem.map((item) => (
              <GalleryPageCard
                name={item.titleUz}
                id={item.id}
                thumbnail={item.thumbnail}
                lang="/uz"
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid ya-container-fluid">
        <div className="ya-page-block">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ya-breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="nuxt-link-active">
                  Главная
                </Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Галерея
              </li>
            </ol>
          </nav>
          <h1 className="ya-group-title">Галерея</h1>
          <div className="ya-gallery-grid">
            {galitem.map((item) => (
              <GalleryPageCard
                name={item.titleRu}
                id={item.id}
                thumbnail={item.thumbnail}
                lang=""
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default GallerPage;
