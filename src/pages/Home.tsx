import React, { useEffect } from 'react'
import UserItem from '../components/UserItem'
import { useStoreApp } from '../zustand/index'

const storeApp = useStoreApp

export const Home: React.FC = () => {
	const { users, getUsers, isLoading } = storeApp((state) => state)

	useEffect(() => {
		getUsers()
		// eslint-disable-next-line
	}, [])

	return (
		<section className='user-container'>
			{isLoading ? (
				<p>Cargando...</p>
			) : (
				<ul className='user-list'>
					{users.map((user) => (
						<UserItem key={user.id} user={user} />
					))}
				</ul>
			)}
		</section>
	)
}
