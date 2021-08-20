import React from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../zustand/types'

type UserProps = {
	user: User
}

const UserItem = ({ user }: UserProps) => {
	const { email, name, phone, id } = user
	const history = useHistory()

	const handleClick = () => {
		history.push(`/user-detail/${id}`)
	}

	return (
		<li className='user-item'>
			<h3>
				{name} || {phone}
			</h3>
			<p> Email: {email} </p>
			<button className='action' onClick={handleClick}>
				View Detail
			</button>
		</li>
	)
}

export default React.memo(UserItem)
