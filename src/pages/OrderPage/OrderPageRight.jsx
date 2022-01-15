import React from 'react'
import { numberWithSpaces } from '../../functionsAnkara'

const OrderPageRight = ({ lang, order }) => {
	if (lang === '/uz') {
		return (
			<div className="col-md-6">
				<table className="table table-striped">
					<tr>
						<td className="text-nowrap">To'lov:</td> <td>{numberWithSpaces(order.cost)} so'm</td>
					</tr>
					<tr>
						<td className="text-nowrap">To'lov Holati:</td> <td>{order.status}</td>
					</tr>
				</table>
			</div>
		)
	} else if (lang === '/en') {
		return (
			<div className="col-md-6">
				<table className="table table-striped">
					<tr>
						<td className="text-nowrap">Payment:</td> <td>{numberWithSpaces(order.cost)} sum</td>
					</tr>
					<tr>
						<td className="text-nowrap">Status:</td> <td>{order.status}</td>
					</tr>
				</table>
			</div>
		)
	} else {
		return (
			<div className="col-md-6">
				<table className="table table-striped">
					<tr>
						<td className="text-nowrap">Сумма:</td> <td>{numberWithSpaces(order.cost)} сум</td>
					</tr>
					<tr>
						<td className="text-nowrap">Статус:</td> <td>{order.status}</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default OrderPageRight
