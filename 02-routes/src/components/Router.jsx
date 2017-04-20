import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
} from 'react-router-dom'

const StaticSite = () => (
	<Router>
		<div>
			<h1>Testing React Router</h1>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/services">Services</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
			<hr/>
			<Route path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/services" component={Services} />
			<Route path="/contact" component={Contact} />
		</div>
	</Router>
)

const Home = () => (
	<div>
		<h2>Hi, welcome to my WebApp React !</h2>
	</div>
)

const About = () => (
	<div>
		<h2>This App is made with React anf use React Router</h2>
	</div>
)

const Services = () => (
	<ul>
		<li>Services of SEO and SEM</li>
		<li>Design and Development Web</li>
	</ul>
)

const Contact = () => (
	<div>
		<h2>Information</h2>
	</div>
)

export default StaticSite