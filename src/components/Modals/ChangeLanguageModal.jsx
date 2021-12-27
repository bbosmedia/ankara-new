import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './languageStyle.css'
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useState } from 'react';

const ChangeLanguageModal = ({sitelang, langModel}) => {
  const [rulink, setRulink] = useState('');
  const [uzlink, setUzlink] = useState('');
  const [enlink, setEnlink] = useState('');
  const breadcrumbs = useBreadcrumbs();
  useEffect(() => {
    var links = [];
    var newLinks = '';
    breadcrumbs.map(link=>{
      links.push(link.key);
    })
    newLinks = links[links.length - 1];
    if(newLinks.includes('/uz')){
      setRulink(newLinks.replace('/uz', ''))
    }else if(newLinks.includes('/en')){
      setRulink(newLinks.replace('/en', ''))
    }else{
      setRulink(newLinks)
    }

    if(newLinks.includes('/uz')){
      setUzlink(newLinks.replace('/uz', '/uz'))
    }else if(newLinks.includes('/en')){
      setUzlink(newLinks.replace('/en', '/uz'))
    }else{
      if(newLinks === '/'){
        setUzlink('/uz')
      }else{
        setUzlink('/uz' + newLinks)
      }
    }

    if(newLinks.includes('/en')){
      setEnlink(newLinks.replace('/en', '/en'))
    }else if(newLinks.includes('/uz')){
      setEnlink(newLinks.replace('/uz', '/en'))
    }else{
      if(newLinks === '/'){
        setEnlink('/en')
      }else{
        setEnlink('/en' + newLinks)
      }

    }
  }, [breadcrumbs])
    return (
        <div onClick={() => setTimeout(langModel, 500)}  id="languageModal___BV_modal_outer_" className={sitelang ? 'active-language-modal' : 'notactive-language-modal'}>
  <div id="languageModal" role="dialog" aria-describedby="languageModal___BV_modal_body_" className="modal fade show ya-lang-modal" aria-modal="true" style={{display: "block"}}>
    <div className="modal-dialog modal-sm">
      <div id="languageModal___BV_modal_content_"  className="modal-content">
        <div id="languageModal___BV_modal_body_" className="modal-body">
          <h5 id="languageModalLabel" className="modal-title"> Tilni tanlang </h5>
          <ul className="ya-lang-list">
            <li className="ya-uz active">
              <Link to={uzlink} onClick={() => setTimeout(langModel, 300)} aria-current="page" className="nuxt-link-exact-active nuxt-link-active">O'zbekcha </Link>
            </li>
            <li className="ya-ru">
              <Link to={rulink} onClick={() => setTimeout(langModel, 300)} className="">Русский </Link>
            </li>
            <li className="ya-en">
              <Link to={enlink} onClick={() => setTimeout(langModel, 300)} className="">English </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div id="languageModal___BV_modal_backdrop_" className="modal-backdrop"></div>
</div>
    )
}

export default ChangeLanguageModal
