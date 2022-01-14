import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, selectAccesToken, selectUserdata } from "../../redux/ChangeRegister";
import ProfileCard from "./ProfileCard";
import ProfileInfoCard from "./ProfileInfoCard";

const ProfileLeftSidebar = ({ lang }) => {

  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccesToken);
  const userData = useSelector(selectUserdata);
  const fetchUser= async() =>{
    try{
        var users = await axios.get('https://api.ankara.uz/profile', {headers: {'Authorization': 'Bearer ' + accessToken}})
        if(users.status === 200){
           dispatch(getUserData(users.data));
        }
    }catch(e){
        console.log(e);
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  if(userData.length === 0) return null
  return (
    <>
      <ProfileCard
        lang={lang}
        name={userData.fullName}
        imgLink="/images/logo.svg"
      />
      <ProfileInfoCard
        lang={lang}
        phoneNumber={userData.phone}
        dateBirth={userData.birthDate}
        dateRegistarion={userData.date.created}
      />
    </>
  );
};

export default ProfileLeftSidebar;
