import React, { Component } from 'react'
import { login } from '../helpers/Auth'

export default class Login extends Component {
	constructor(...props) {
		super(...props)

		this.state = { loginMessage: null }

		this.handleOnSubmit = this.handleOnSubmit.bind(this)
	}

	handleOnSubmit(e) {
		e.preventDefault()
		alert('send form')
		login( this.email.value, this.password.value )
			.catch( error => this.setState( this.setErrorMessage('Invalid user or password') ) )
	}

	setErrorMessage(err) {
		return { loginMessage: err }
	}

	render() {
		return (
			<div>
				<article className="Main-container">
					<h1>Login</h1>
					<form onSubmit={this.handleOnSubmit}>
						<input type="email" placeholder="Email" ref={ email => this.email = email } />
						<input type="password" placeholder="Password" ref={ password => this.password = password } />
						{
							this.state.loginMessage &&
							<div className="error">
								<p>
									Error: {this.state.loginMessage}
								</p>
							</div>
						}
					<input type="submit" value="Login"/>
					</form>
				</article>
			</div>
		);
	}
}