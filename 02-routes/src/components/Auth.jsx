import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
	Switch
} from 'react-router-dom'

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true
		setTimeout(cb, 100) //fake async
	},
	signout(cb) {
		this.isAuthenticated = false
		setTimeout(cb, 100)
	}
}

const Home = () => <h3>Home</h3>
const Public = () => <h3>Public Content</h3>
const Protected = () => <h3>Protected Content</h3>

class Login extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			redirectRoute: false
		}

		this.login = this.login.bind(this)
	}

	login() {

	}

	render() {
		if () {

		} else {
			
		}
	}
}

const AuthSite = () => (
	<Router>
		<div>
			<AuthButton />
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/public">Public Page</Link></li>
				<li><Link to="/protected">Protected Page</Link></li>
				</ul>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/public" component={Public} />
					<PrivateRoute path="/protected" component={Protected} />
				</Switch>
		</div>
	</Router>
)

export default AuthSite