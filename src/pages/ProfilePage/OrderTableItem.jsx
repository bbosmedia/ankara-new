import React from 'react'
import { useNavigate } from 'react-router-dom'
import { numberWithSpaces } from '../../functionsAnkara'

const OrderTableItem = ({ lang, item }) => {
	const navigate = useNavigate()
	const changePage = ({id}) => {
		if (lang === '/uz') {
			navigate(`/uz/profile/${id}`)
		} else if (lang === '/en') {
			navigate(`/en/profile/${id}`)
		} else {
			navigate(`/profile/${id}`)
		}
	}
	return (
		<tr onClick={changePage}>
			<th scope="row">{item.id}</th>
			<td>{item.created_at}</td>
			<td></td>
			<td>{item.status}</td>
			<td class="text-right">{numberWithSpaces(item.cost)}
            {lang === '/uz' && "so'm"}
            {lang === '/ru' && 'сум'}
            {lang === '/en' && 'sum'}
            </td>
		</tr>
	)
}

export default OrderTableItem
