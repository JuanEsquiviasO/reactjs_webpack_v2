import React, { Component, PropTypes } from 'react'
import MoviesList from './MoviesList'

class App extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			movies: [
				{ id: 1, name: 'The Last Jedi', director: 'Rian Johnson' },
				{ id: 2, name: 'The Justice League', director: 'Zack Snyder' }
			]
		}

		this.handleOnAddMovie = this.handleOnAddMovie.bind(this)
	}

	handleOnAddMovie(e) {
		//alert('Event in React')
		e.preventDefault()

		let form = e.target,
			movie = {
				id: form.id.value,
				name: form.name.value,
				director: form.director.value
			}
		this.setState({
			movies: this.state.movies.concat([movie])
		})
	}

	render() {
		return(
			<MoviesList
				movies={this.state.movies}
				onAddMovie={this.handleOnAddMovie}
			/>
		)
	}
}

App.propTypes = {}

App.defaultProps = {}

export default App