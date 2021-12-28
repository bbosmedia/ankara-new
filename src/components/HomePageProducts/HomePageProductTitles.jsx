import React from 'react'
import { Link } from 'react-router-dom'

function HomepageProductTitles({lang, nameUz, nameEn, nameRu, id}){
    if(lang === '/uz'){
        return(
            <h5 className="ya-group-title">
                        <Link to={`/uz/menu/${id}`} className="">{nameUz}</Link>
                    </h5>
        )
    }else if(lang === '/en'){
        return(
            <h5 className="ya-group-title">
                        <Link to={`/en/menu/${id}`} className="">{nameEn}</Link>
                    </h5>
        )
    }else{
        return(
            <h5 className="ya-group-title">
                        <Link to={`menu/${id}`} className="">{nameRu}</Link>
                    </h5>
        )
    }
}

export default HomepageProductTitles
