import React from 'react'

const ContactsPageBrandInfo = ({name, timePeriod, phoneNumber, address, orinter, phoneReservation}) => {
    return (
        <>
                <p><u><strong>{name}&nbsp;</strong>{timePeriod}</u></p>
               <p><strong>Номер телефона:</strong> {phoneNumber}</p>
               {phoneReservation && <p><strong>Резерв столов:</strong>&nbsp; {phoneReservation}</p> }
               <p><strong>Адрес: </strong>{address}</p>
               {orinter && <p><strong>Ориентир: </strong>{orinter}</p>}
               <p>&nbsp;</p>
        </>
    )
}

export default ContactsPageBrandInfo
