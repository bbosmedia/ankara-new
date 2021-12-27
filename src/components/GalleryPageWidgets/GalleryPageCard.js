import React from "react";
import { Link } from "react-router-dom";

const GalleryPageCard = ({ name, id, thumbnail, lang}) => {
  return (
    <div key={id} className="ya-gallery-card">
      <img
        alt={name}
        src={thumbnail}
        className="lazyLoad isLoaded"
      />
      <div className="ya-gallery-card__content">
        <Link to={`${lang}/gallery/${id}`} className="" title={name}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export default GalleryPageCard;
