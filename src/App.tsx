import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import UserDetail from './pages/UserDetail'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/user-detail/:userId'>
					<UserDetail />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
