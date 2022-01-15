import React from 'react'

const OrderTopLeft = ({ userData, lang, date }) => {
	if (lang === '/uz') {
		return (
			<div className="col-md-6">
				<table className="table table-striped">
					<tr>
						<td className="text-nowrap">FISH:</td>
						<td>{userData.fullName}</td>
					</tr>
					<tr>
						<td className="text-nowrap">Telefon raqam:</td>
						<td>{userData.phone}</td>
					</tr>
					<tr>
						<td className="text-nowrap">Sana:</td>
						<td>{date}</td>
					</tr>
				</table>
			</div>
		)
	} else if (lang === '/en') {
		return (
			<div className="col-md-6">
				<table className="table table-striped">
					<tr>
						<td className="text-nowrap">Full name:</td>
						<td>{userData.fullName}</td>
					</tr>
					<tr>
						<td className="text-nowrap">Phone number:</td>
						<td>{userData.phone}</td>
					</tr>
					<tr>
						<td className="text-nowrap">Date:</td>
						<td>{date}</td>
					</tr>
				</table>
			</div>
		)
	} else {
		return (
			<div className="col-md-6">
				<table className="table table-striped">
					<tr>
						<td className="text-nowrap">ФИО:</td>
						<td>{userData.fullName}</td>
					</tr>
					<tr>
						<td className="text-nowrap">Номер телефона:</td>
						<td>{userData.phone}</td>
					</tr>
					<tr>
						<td className="text-nowrap">Дата:</td>
						<td>{date}</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default OrderTopLeft
