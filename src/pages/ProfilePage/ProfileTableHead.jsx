import React from 'react'

const ProfileTableHead = ({lang}) => {
    if(lang === '/uz'){
        return (
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Sana</th>
                  <th scope="col">To'lov turi</th>
                  <th scope="col">Holati</th>
                  <th scope="col" className="text-right">
                    Jami
                  </th>
                </tr>
              </thead>
        )
    }else if(lang === '/en'){
        return (
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Payment method</th>
                  <th scope="col">State</th>
                  <th scope="col" className="text-right">
                    Total
                  </th>
                </tr>
              </thead>
        )
    }else{
        return (
            <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Дата</th>
                  <th scope="col">Способ оплаты</th>
                  <th scope="col">Статус</th>
                  <th scope="col" className="text-right">
                    Сумма
                  </th>
                </tr>
              </thead>
        )
    }
}

export default ProfileTableHead
