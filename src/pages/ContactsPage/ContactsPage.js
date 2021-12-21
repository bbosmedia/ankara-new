import React from 'react'
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import ContactsPageBrandInfo from '../../components/ContactsPageBrachInfo/ContactsPageBrandInfo';
import ContactsPageInfo from '../../components/ContactsPageInfo/ContactsPageInfo';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const ContactsPage = () => {
   const breadcrumbs = useBreadcrumbs();
    return (
        <div data-v-b186a8c8="" className="container-fluid ya-container-fluid">
   <div data-v-b186a8c8="" className="ya-page-block">
      <nav data-v-b186a8c8="" aria-label="breadcrumb">
         <ol data-v-b186a8c8="" className="breadcrumb ya-breadcrumb">
            <li data-v-b186a8c8="" className="breadcrumb-item"><Link to="/" className="nuxt-link-active">
               Главная
               </Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
               Контакты
            </li>
         </ol>
      </nav>
      {ContactHeader(breadcrumbs[1].key)}
      <div data-v-b186a8c8="" className="row">
         <div data-v-b186a8c8="" className="col-md-6">
            <div data-v-b186a8c8="" className="ya-page-text">
               <ContactsPageInfo
               about="Yapona Mama - доставка суши и роллов в Ташкенте. Мы готовим только из качественных продуктов мировых производителей, трепетно относимся к каждому заказу и всегда доставляем вовремя." 
               phone="1089"
               telegramLink="http://t.me/yaponamamabot"
               iosLink="https://apps.apple.com/uz/app/yaponamama-restaurant/id1457179873"
               androindLink="https://play.google.com/store/apps/details?id=uz.futuresoft.yaponamama&amp;hl=ru&amp;gl=US"
               phonePred="+998901866750"
               email="info@yaponamama.uz"
               />
               <ContactsPageBrandInfo name="Yaponamama Бухара" phoneNumber="+99878-147-89-89" phoneReservation="+998993701213; +998991601213" timePeriod="11:00 - 22:00" address=" г. Бухара, ул. Навоишох, 16" orinter="5й микрорайон, Макро"></ContactsPageBrandInfo>
               <ContactsPageBrandInfo name="Yaponamama Бухара" phoneNumber="+99878-147-89-89" phoneReservation="+998993701213; +998991601213" timePeriod="11:00 - 22:00" address=" г. Бухара, ул. Навоишох, 16" orinter="5й микрорайон, Макро"></ContactsPageBrandInfo>
               <ContactsPageBrandInfo name="Yaponamama Бухара" phoneNumber="+99878-147-89-89" phoneReservation="+998993701213; +998991601213" timePeriod="11:00 - 22:00" address=" г. Бухара, ул. Навоишох, 16" orinter="5й микрорайон, Макро"></ContactsPageBrandInfo>
               <ContactsPageBrandInfo name="Yaponamama Бухара" phoneNumber="+99878-147-89-89" phoneReservation="+998993701213; +998991601213" timePeriod="11:00 - 22:00" address=" г. Бухара, ул. Навоишох, 16" orinter="5й микрорайон, Макро"></ContactsPageBrandInfo>
               <ContactsPageBrandInfo name="Yaponamama Бухара" phoneNumber="+99878-147-89-89" phoneReservation="+998993701213; +998991601213" timePeriod="11:00 - 22:00" address=" г. Бухара, ул. Навоишох, 16" orinter="5й микрорайон, Макро"></ContactsPageBrandInfo>
            </div>
         </div>
         <div className="col-md-6">
            <YMaps>
                <Map style={{height: "85vh"}} defaultState={{ center: [41.2995, 69.2401], zoom: 12 }}>
                <Placemark defaultGeometry={[41.3308916, 69.2450557]} options={{
                   iconLayout: 'default#image',
                   iconImageHref: 'images/placemarker.png',
                   iconImageSize: [70, 70],
                }}
                />
                <Placemark defaultGeometry={[41.3069837,69.2811906]} options={{
                   iconLayout: 'default#image',
                   iconImageHref: 'images/placemarker.png',
                   iconImageSize: [70, 70],
                }}
                />
                <Placemark defaultGeometry={[41.3416481,69.2211026]} options={{
                   iconLayout: 'default#image',
                   iconImageHref: 'images/placemarker.png',
                   iconImageSize: [70, 70],
                }}
                />
                </Map>
            </YMaps>
         </div>
      </div>
   </div>
</div>
    )
}

function ContactHeader(lang){
   if(lang === '/uz'){
      return (<h1 className="ya-group-title">Aloqa</h1>);
   }else if(lang === '/en'){
      return (<h1 className="ya-group-title">Contacts</h1>);
   }else{
      return (<h1 className="ya-group-title">Контакты</h1>);
   }
}

export default ContactsPage
