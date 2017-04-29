import React, { Component } from 'react'
import {
	Route,
	BrowserRouter as Router,
	Link,
	Redirect,
	Switch
} from 'react-router-dom'
import { firebaseAuth } from '../data/config'

import Home from './pages/'
import About from './pages/About'
import DashboardMovies from './pages/protected/'
import Register from './pages/Register'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import { logout } from './helpers/Auth'

import 'pure-css/lib/menus.css'
import './index.css'
import moviedbLogo from './media/movie_db_logo.jpg'

const PrivateRoute = ( { component: Component, authed, rest } ) => (
	<Route 
		{...rest}
		render={
			props => authed === true
				? <Component {...props} />
				: <Redirect to={ { pathname: '/login', state: { from: props.location } } } />
		}
	/>
)

const PublicRoute = ( { component: Component, authed, rest } ) => (
	<Route
		{...rest}
		render={
			props => authed === false
				? <Component {...props} />
				: <Redirect to='/movies' />
		}
	/>
)

class App extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			authed: false,
			loading: true
		}

		this.handleOnClick = this.handleOnClick.bind(this)
	}

	handleOnClick(e) {
		// alert('click')
		document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
		document.getElementById('toggle').classList.toggle('x');
	}

	componentDidMount() {
		this.removeListener = firebaseAuth().onAuthStateChanged( user => {
			if (user) {
				this.setState({
					authed: true,
					loading: false
				})
			} else {
				this.setState({
					loading: false
				})
			}
		})
	}

	componentWillUnmount() {
		this.removeListener()
	}

	render() {
		return this.state.loading === true
		? <h1>Loading...</h1>
		: (
			<Router>
				<div>
					<header className="custom-menu-wrapper">
						<div className="pure-menu custom-menu custom-menu-top">
							<a href="#" className="pure-menu-heading custom-menu-brand">
								<img className="moviedb-logo" src={moviedbLogo} alt="MovieDB"/>
							</a>
							<a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
						</div>
						<div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
							<div className="custom-menu-screen"></div>
							<ul className="pure-menu-list">
								<li className="pure-menu-item">
									<Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>Home</Link>
								</li>
								<li className="pure-menu-item">
									<Link to="/about" className="pure-menu-link" onClick={this.handleOnClick}>About</Link>
								</li>
								{
									(this.state.authed)
										?
											<span>
												<li className="pure-menu-item">
													<Link to="/movies" className="pure-menu-link" onClick={this.handleOnClick}>Movies</Link>
												</li>
												<li className="pure-menu-item">
													<Link 
														to="/logout" 
														className="pure-menu-link" 
														onClick={() => {
															logout()
															this.setState( {authed: false} )
															this.handleOnClick()
														}}
													>Logout</Link>
												</li>
											</span>
										:
											<span>
												<li className="pure-menu-item">
													<Link to="/register" className="pure-menu-link" onClick={this.handleOnClick}>Register</Link>
												</li>
												<li className="pure-menu-item">
													<Link to="/login" className="pure-menu-link" onClick={this.handleOnClick}>Login</Link>
												</li>
											</span>
								}
							</ul>
						</div>
      		</header>
					<main className="Main">
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/about' exact component={About} />
							<PublicRoute authed={this.state.authed} path='/login' component={Login} />
							<PublicRoute authed={this.state.authed} path='/register' component={Register} />
							<PrivateRoute authed={this.state.authed} path='/movies' component={DashboardMovies} />
							<Route component={Error404} />
						</Switch>
					</main>
				</div>
			</Router>
		)
	}
}

export default App