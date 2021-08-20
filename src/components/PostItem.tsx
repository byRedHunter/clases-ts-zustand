import React from 'react'
import { Post } from '../zustand/types'

type PostProp = {
	post: Post
}

const PostItem = ({ post }: PostProp) => {
	const { title, body } = post
	return (
		<li className='user-item'>
			<h2>{title}</h2>
			<p>{body}</p>
		</li>
	)
}

export default PostItem
