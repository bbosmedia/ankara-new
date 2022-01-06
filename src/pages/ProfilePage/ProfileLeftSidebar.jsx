import React from "react";
import ProfileCard from "./ProfileCard";
import ProfileCardQR from "./ProfileCardQR";
import ProfileInfoCard from "./ProfileInfoCard";

const ProfileLeftSidebar = ({ lang }) => {
  return (
    <>
      <ProfileCard
        lang={lang}
        name="Abbos Nurgulshanov"
        imgLink="/images/logo.svg"
      />
      <ProfileInfoCard
        lang={lang}
        phoneNumber="+998977080497"
        dateBirth="10.04.1997"
        dateRegistarion="05.01.2022"
      />
      <ProfileCardQR
        lang={lang}
        qrPicture="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
        balance="1000"
      />
    </>
  );
};

export default ProfileLeftSidebar;
