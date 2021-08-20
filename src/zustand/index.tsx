import create, { GetState, SetState } from 'zustand'
import { AppState } from './types'

export const useStoreApp = create(
	(setState: SetState<AppState>, getState: GetState<AppState>): AppState => {
		return {
			users: [],
			userDetail: null,
			isLoading: false,
			posts: [],
			getUsers: async () => {
				setState({ isLoading: true })
				const result = await fetch('https://jsonplaceholder.typicode.com/users')
				const users = await result.json()
				setState({ users })
				setState({ isLoading: false })
			},
			getUserDetail: async (userId: string | number) => {
				setState({ isLoading: true })
				const result = await fetch(
					`https://jsonplaceholder.typicode.com/users/${userId}`
				)
				const userDetail = await result.json()
				setState({ userDetail })
				setState({ isLoading: false })
			},
			getUserPosts: async (userId: string | number) => {
				const result = await fetch(
					`https://jsonplaceholder.typicode.com/posts?userId=${userId}`
				)
				const posts = await result.json()
				setState({ posts })
			},
		}
	}
)
