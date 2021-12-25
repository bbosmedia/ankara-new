import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useBreadcrumbs from "use-react-router-breadcrumbs";

const NotFoundPage = () => {
  const [lang, setLang] = useState('/');
  const breadcrumbs = useBreadcrumbs();
  useEffect(() => {
    if(breadcrumbs.length > 0){
      setLang(breadcrumbs[1].key)
    }
    console.log(breadcrumbs[1].key);
  }, [])
  if(lang === '/uz'){
    return (
      <div className="error-block"><div className="container"><div className="error-code">404</div> <div className="error-text">
    Siz qidirayotgan sahifani topa<br /> olmadik.
  </div> <Link to="/uz" className="error-btn">Asosiy sahifaga qaytish</Link></div></div>
  )
  }else if(lang === '/en'){
    return (
      <div className="error-block"><div className="container"><div className="error-code">404</div> <div className="error-text">
    We couldn't seem to find the page <br /> you are looking for.
  </div> <Link to="/en" className="error-btn">Go back to the main page</Link></div></div>
  )
  }else{
      return (
        <div className="error-block"><div className="container"><div className="error-code">404</div> <div className="error-text">
      Похоже мы не можем найти нужную вам <br />страницу
    </div> <Link to="/" className="error-btn">Вернуться на главную</Link></div></div>
    )
  }
}

export default NotFoundPage
