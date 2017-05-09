import React, { Component } from 'react'
import Movies from '../../movies/'

export default class DashboardMovies extends Component {
	render() {
		return (
			<article className="Main-container">
				<Movies />
			</article>
		)
	}
}