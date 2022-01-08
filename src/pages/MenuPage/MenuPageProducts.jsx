import React from 'react';
import {  useParams } from 'react-router-dom';
import CategoryWithChild from './CategoryWithChild';
import CollectionProductList from './CollectionProductList';

const MenuPageProducts = ({lang, menuitems}) => {
    const {id} = useParams()

    if(id){
      var menuitem = menuitems[menuitems.findIndex(item => item.id === parseInt(id))]
      if(menuitem.isCollection){
        return (<CollectionProductList id={id} lang={lang} menuitem={menuitem} />)
      }else if(menuitem.haveChild){
        return (<CategoryWithChild id={id} lang={lang} menuitem={menuitem} />)
      }else{
        return(<CollectionProductList id={menuitem.id} lang={lang} menuitem={menuitem} />)
      }
    }else{
      if(menuitems[0].isCollection){
        return (<CollectionProductList id={menuitems[0].id} lang={lang} menuitem={menuitems[0]} />)
      }else{

      }
    }
}

export default MenuPageProducts
