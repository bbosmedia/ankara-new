import React from 'react'
import { numberWithSpaces } from '../../functionsAnkara'

const OrderPageBottom = ({lang, items}) => {
    if(lang === '/uz'){
        return (
            <>
                <h3 className="modal-title mb-4">Buyurtmalar</h3>
              <table className="table table-striped">
                <tr>
                  <th width="50">#</th> <th>Burutma</th>
                  <th className="text-center">Soni</th>
                  <th className="text-right">Narxi</th>
                  <th className="text-right">Umummiy Summasi</th>
                </tr>
                {items.map((item, index) =>{
                    return(
                        <tr key={item.product.id}>
                  <td>{index + 1}</td> <td>{item.product.nameUz}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-right">{numberWithSpaces(item.product.price)} so'm</td>
                  <td className="text-right">{numberWithSpaces(item.cost)} so'm</td>
                </tr>
                    )
                })}
                
              </table> 
            </>
        )
    }else if(lang === '/en'){
        return (
            <>
                <h3 className="modal-title mb-4">Products</h3>
              <table className="table table-striped">
                <tr>
                  <th width="50">#</th> <th>Product</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-right">Cost</th>
                  <th className="text-right">Total Cost</th>
                </tr>
                {items.map((item, index) =>{
                    return(
                        <tr key={item.product.id}>
                  <td>{index + 1}</td> <td>{item.product.nameEn}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-right">{numberWithSpaces(item.product.price)} sum</td>
                  <td className="text-right">{numberWithSpaces(item.cost)} sum</td>
                </tr>
                    )
                })}
                
              </table> 
            </>
        )
    }else{
        return (
            <>
                <h3 className="modal-title mb-4">????????????????</h3>
              <table className="table table-striped">
                <tr>
                  <th width="50">#</th> <th>??????????????</th>
                  <th className="text-center">????????????????????</th>
                  <th className="text-right">????????</th>
                  <th className="text-right">??????????</th>
                </tr>
                {items.map((item, index) =>{
                    return(
                        <tr key={item.product.id}>
                  <td>{index + 1}</td> <td>{item.product.nameUz}</td>
                  <td className="text-center">{item.quantity}</td>
                  <td className="text-right">{numberWithSpaces(item.product.price)} ??????</td>
                  <td className="text-right">{numberWithSpaces(item.cost)} ??????</td>
                </tr>
                    )
                })}
                
              </table> 
            </>
        )
    }
   
}

export default OrderPageBottom
