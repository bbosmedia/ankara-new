import React from 'react'
import ProdcutModal from '../../components/ProductModal/ProdcutModal'
import HomePage from '../HomePage/HomePage'

const ProductMainPage = ({lang}) => {
    return (
        <>
        <ProdcutModal lang={lang} />
        <HomePage lang={lang} />
        </>
    )
}

export default ProductMainPage
