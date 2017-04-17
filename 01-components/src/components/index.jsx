import React, { Component, PropTypes } from 'react'
import MovieAddForm from './MovieAddForm'
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
				name: (form.name.value) ? form.name.value : App.defaultProps.name,
				director: (form.director.value) ? form.director.value : App.defaultProps.director
			}
		this.setState({
			movies: this.state.movies.concat([movie])
		})

		form.reset()
	}

	render() {
		return(
			<div>
				<MovieAddForm onAddMovie={this.handleOnAddMovie} />
				<MoviesList movies={this.state.movies} />
			</div>
		)
	}
}

App.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	director: PropTypes.string.isRequired
}

App.defaultProps = {
	name: 'Unknown movie',
	director: 'Unassigned director'
}

export default App