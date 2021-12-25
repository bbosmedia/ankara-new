import React from 'react'
import ActionsPageCard from './ActionsPageCard'
import ActionsPageHeader from './ActionsPageHeader'

const ActionsPage = ({lang}) => {
    return (
<div className="container-fluid ya-container-fluid">
  <div className="ya-page-block">
   <ActionsPageHeader lang={lang} />
   <ActionsPageCard lang={lang} />
  </div>
</div>
    )
}

export default ActionsPage
