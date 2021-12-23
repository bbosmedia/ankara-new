import React, { useState, useEffect } from 'react'
import CompyrightClaim from './CompyrightClaim';
import './Footer.css'
import FooterEn from './FooterEn';
import FooterRu from './FooterRu';
import FooterUz from './FooterUz';
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Footer = () => {
    const[lang, setLang] =  useState('/ru');
    const breadcrumbs = useBreadcrumbs();
    useEffect(() => {
      if (breadcrumbs.length > 1) {
        if (breadcrumbs[1].key === "/uz") {
          setLang("/uz");
        } else if (breadcrumbs[1].key === "/en") {
          setLang("/en");
        } else {
          setLang("/ru");
        }
      } else {
        setLang("/ru");
      }
    }, [breadcrumbs]);
    if(lang === '/uz'){
        return (
            <footer>
            <FooterUz />
            <CompyrightClaim lang="/uz" />
            </footer>
        )
    }else if(lang === '/en'){
        return (
            <footer>
            <FooterEn />
            <CompyrightClaim lang="/en" />
            </footer>
        )
    }else{
        return (
            <footer>
            <FooterRu />
            <CompyrightClaim lang="/ru" />
            </footer>
        )
    }
}

export default Footer
