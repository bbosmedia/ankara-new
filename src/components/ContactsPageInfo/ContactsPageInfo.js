import React from 'react'

const ContactsPageInfo = ({about, phone, telegramLink, iosLink, androindLink, phonePred, email}) => {
    return (
        <>
            <p>{about}</p>
            <p>&nbsp;<strong>{phone}</strong></p>
            {telegramLink && <p><a href={telegramLink} target="_blank"><strong>Телеграм-бот</strong></a></p>}
            {iosLink && <p><a href={iosLink}><strong>Мобильное приложение для iOS</strong></a></p>}
            {androindLink && <p><a href={androindLink}><strong>Мобильное приложение для Android</strong></a></p>}
            {phonePred && <p><strong>Для коммерческих предложений: </strong>{phonePred}</p>}
            {email && <p><strong>E-mail:</strong> {email}</p>}
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><strong>Наши рестораны</strong></p>
        </>
    )
}

export default ContactsPageInfo
