import React from 'react'
import { Link } from 'react-router-dom'

const ChekcoutButtons = ({lang}) => {
    return (
        <div className="form-row d-flex justify-content-between align-items-center">
        {lang === '/ru' && <button type="button" className="btn btn ya-btn-red order-btn btn-none">Заказать</button>}
        {lang === '/en' && <button type="button" className="btn btn ya-btn-red order-btn btn-none">To order</button>}
        {lang === '/uz' && <button type="button" className="btn btn ya-btn-red order-btn btn-none">Buyurtma berish</button>}
        {lang === '/ru' && <Link to="/menu" className="back-link">Вернуться в меню</Link>}
        {lang === '/uz' && <Link to="/uz/menu" className="back-link">Menuga qaytish</Link>}
        {lang === '/en' && <Link to="/en/menu" className="back-link">Go back menu</Link>}
    </div>
    )
}

export default ChekcoutButtons
