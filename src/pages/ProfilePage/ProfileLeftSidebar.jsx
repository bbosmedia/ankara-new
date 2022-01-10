import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAccesToken } from "../../redux/ChangeRegister";
import ProfileCard from "./ProfileCard";
import ProfileCardQR from "./ProfileCardQR";
import ProfileInfoCard from "./ProfileInfoCard";

const ProfileLeftSidebar = ({ lang }) => {
  const [user, setUser] =  useState(null);
  const accessToken = useSelector(selectAccesToken)
  const fetchUser= async() =>{
    try{
        var users = await axios.get('https://api.ankara.uz/profile', {headers: {'Authorization': 'Bearer ' + accessToken}})
        if(users.status === 200){
            setUser(users.data)
            console.log(users.data)
        }
    }catch(e){
        console.log(e);
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  if(user === null) return null
  return (
    <>
      <ProfileCard
        lang={lang}
        name={user.fullName}
        imgLink="/images/logo.svg"
      />
      <ProfileInfoCard
        lang={lang}
        phoneNumber={user.phone}
        dateBirth={user.birthDate}
        dateRegistarion={user.date.cre}
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
