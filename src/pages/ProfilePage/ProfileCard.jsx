import React from "react";
import './profileCard.css'

const ProfileCard = ({imgLink, name}) => {
  return (
    <div className="card ya-profile-card">
      <div className="card-body text-center">
        <div className="ya-avatar">
          <img
            className="img-fluid lazyLoad isLoaded"
            src={imgLink}
          />
        </div>
        <h3 className="text-center">{name}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
