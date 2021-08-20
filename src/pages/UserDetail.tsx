import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostItem from '../components/PostItem'
import { useStoreApp } from '../zustand'

const appStore = useStoreApp

const UserDetail: React.FC = () => {
	const { userId } = useParams<{ userId: string }>()

	const { isLoading, userDetail, posts, getUserDetail, getUserPosts } =
		appStore((state) => state)

	useEffect(() => {
		getUserDetail(userId)
		getUserPosts(userId)
		// eslint-disable-next-line
	}, [])

	return (
		<section className='user-container'>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h2 className='title'> Posts from {userDetail?.name} </h2>
					<ul className='user-list'>
						{posts.map((post) => (
							<PostItem key={post.id} post={post} />
						))}
					</ul>
				</>
			)}
		</section>
	)
}

export default UserDetail
