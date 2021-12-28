import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SliderOfGalleryItem from "./SliderOfGalleryItem";
import GalleryItemBreadcrumb from "./GalleryItemBreadcrumb";

const GalleryItemPage = ({ lang }) => {
  let { id } = useParams();
  const [items, setItems] = useState(null);
  const fetchGalItems = async () => {
    try {
      var items = await axios.get(`https://api.ankara.uz/gallery/${id}`);
      setItems(items.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchGalItems();
  }, [lang]);

  if (items === null) return null;
  return (
    <div className="container-fluid ya-container-fluid gallery-page">
      <div className="ya-page-block">
        <GalleryItemBreadcrumb
          lang={lang}
          titleUz={items.titleUz}
          titleRu={items.titleRu}
          titleEn={items.titleEn}
        />

        <SliderOfGalleryItem photos={items.photos} />
      </div>
    </div>
  );
};

export default GalleryItemPage;
