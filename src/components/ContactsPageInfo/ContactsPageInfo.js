import React from 'react'
import { Link } from 'react-router-dom'

const ContactsPageInfo = ({about, phone, telegramLink}) => {
    return (
        <>
        <p>{about}</p>
               <p>&nbsp;<strong>{phone}</strong></p>
               {telegramLink && <p><a href={telegramLink} target="_blank"><strong>Телеграм-бот</strong></a></p>}
               <p><Link to="https://apps.apple.com/uz/app/yaponamama-restaurant/id1457179873"><strong>Мобильное приложение для iOS</strong></Link></p>
               <p><Link to="https://play.google.com/store/apps/details?id=uz.futuresoft.yaponamama&amp;hl=ru&amp;gl=US"><strong>Мобильное приложение для Android</strong></Link></p>
               <p><strong>Для коммерческих предложений: </strong>+998901866750</p>
               <p><strong>E-mail:</strong> info@yaponamama.uz</p>
               <p>&nbsp;</p>
               <p>&nbsp;</p>
               <p><strong>Наши рестораны</strong></p>
        </>
    )
}

export default ContactsPageInfo
