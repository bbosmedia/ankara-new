import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs';
const breadcrumbs = useBreadcrumbs();

const NotFoundPage = () => {
    return (
        <div class="error-block"><div class="container"><div class="error-code">404</div> <div class="error-text">
      Похоже мы не можем найти нужную вам <br>страницу
    </div> <a href="/uz" class="error-btn">Вернуться на главную</a></div></div>
    )
}

export default NotFoundPage
