import React from 'react'

const ProfileInfoCard = ({lang, phoneNumber, dateBirth, dateRegistarion}) => {
    const logout = () =>{
        console.log('Logout');
    }
    if(lang === '/uz'){
        return(
            <div className="card ya-profile-card">
               <div className="card-body">
                  <h5 className="mb-4">Shaxsiy ma'lumotlar</h5>
                  <div className="ya-profile-detail">
                     <p className="ya-profile-label">Telefon raqami:</p>
                     <p className="ya-profile-value">{phoneNumber}</p>
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
                  <a ocClick={logout} className="ya-exit-btn">Chiqish</a>
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
                     <p className="ya-profile-value">{phoneNumber}</p>
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
                  <a ocClick={logout} className="ya-exit-btn">Exit</a>
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
                     <p className="ya-profile-value">{phoneNumber}</p>
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
                  <a ocClick={logout} className="ya-exit-btn">Выйти</a>
               </div>
            </div>
        )
    }
}

export default ProfileInfoCard
