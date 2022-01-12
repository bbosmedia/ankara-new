import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteCard } from '../../redux/CartRedux';
import { deleteAccesToken } from '../../redux/ChangeRegister';

const ProfileInfoCard = ({lang, phoneNumber, dateBirth, dateRegistarion}) => {
   const dispatch = useDispatch();
   const navigate = useNavigate()
    const logout = () =>{
       dispatch(deleteAccesToken());
       dispatch(deleteCard());
       if(lang === '/uz'){
         navigate("/uz", { replace: true });
       }else if(lang === '/en'){
         navigate("/en", { replace: true });
       }else{
         navigate("/", { replace: true });
       }
    }
    if(lang === '/uz'){
        return(
            <div className="card ya-profile-card">
               <div className="card-body">
                  <h5 className="mb-4">Shaxsiy ma'lumotlar</h5>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Telefon raqami:</p>
                     <p className="ya-profile-value">+{phoneNumber}</p>
                  </div>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Tug'ilgan kun sanasi:</p>
                     <p className="ya-profile-value">
                        {dateBirth}
                     </p>
                  </div>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Ro'yxardan o'tgan sana:</p>
                     <p className="ya-profile-value">
                        {dateRegistarion}
                     </p>
                  </div>
                  <a onClick={logout} className="ya-exit-btn">Chiqish</a>
               </div>
            </div>
        )
    }else if(lang === '/en'){
        return(
            <div className="card ya-profile-card">
               <div className="card-body">
                  <h5 className="mb-4">Personal data</h5>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Phone number:</p>
                     <p className="ya-profile-value">+{phoneNumber}</p>
                  </div>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Date of birth:</p>
                     <p className="ya-profile-value">
                        {dateBirth}
                     </p>
                  </div>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Registration date:</p>
                     <p className="ya-profile-value">
                        {dateRegistarion}
                     </p>
                  </div>
                  <a onClick={logout} className="ya-exit-btn">Exit</a>
               </div>
            </div>
        )
    }else{
        return(
            <div className="card ya-profile-card">
               <div className="card-body">
                  <h5 className="mb-4">Личные данные</h5>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Номер телефона:</p>
                     <p className="ya-profile-value">+{phoneNumber}</p>
                  </div>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Дата рождения:</p>
                     <p className="ya-profile-value">
                        {dateBirth}
                     </p>
                  </div>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Дата регистрации:</p>
                     <p className="ya-profile-value">
                        {dateRegistarion}
                     </p>
                  </div>
                  <a onClick={logout} className="ya-exit-btn">Выйти</a>
               </div>
            </div>
        )
    }
}

export default ProfileInfoCard
