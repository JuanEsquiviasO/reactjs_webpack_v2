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

const Contact = ( { match } ) => (
	<div> 
		<h2>Information of contact</h2>
		<Route path={`${match.url}/:contactinfo`} component={InfoContact}  />
		<Route exact path={match.url} render={() => (
			<h3>Stay in contact with us</h3>
		)} />
		<ul>
			<li><Link to={`${match.url}/email`}>E-mail</Link></li>
			<li><Link to={`${match.url}/web`}>Website</Link></li>
			<li><Link to={`${match.url}/ubication`}>Ubication</Link></li>
		</ul>
		<Route path={`${match.url}/email`} render={() => (
			<a href="mailto:jesquivias@pucp.edu.pe" target="_blank">jesquivias@pucp.edu.pe</a>
		)} />
		<Route path={`${match.url}/web`} render={() => (
			<a href="https://juanesquiviaso.github.io/" target="_blank">juanesquiviaso.github.io</a>
		)} />
		<Route path={`${match.url}/ubication`} render={() => (
			<a href="https://www.google.com.pe/maps/place/Universidad+Catolica/@-12.0690711,-77.0806311,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c912d40840a5:0xd7a0bfb797e5862e!8m2!3d-12.0690764!4d-77.078437?hl=en" target="_blank">Lima - Perú</a>
		)} />
	</div>
)

const InfoContact = ( { match } ) => (
	<div>
		<h4>{match.params.contactinfo}</h4>
	</div>
)

export default StaticSite