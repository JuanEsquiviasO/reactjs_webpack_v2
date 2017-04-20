import React, { Component, PropTypes } from 'react'
import uid from 'uid'
import $ from 'jquery'
import { movies } from '../data/movies.json'
import MovieAddForm from './MovieAddForm'
import MoviesList from './MoviesList'

class App extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			movies: []
		}

		this.handleOnAddMovie = this.handleOnAddMovie.bind(this)
		this.fetchData = this.fetchData.bind(this)
		this.resetData = this.resetData.bind(this)
	}

	handleOnAddMovie(e) {
		//alert('Event in React')
		e.preventDefault()

		let form = e.target,
			movie = {
				id: ( form.id.value ) ? form.id.value : App.defaultProps.id,
				name: ( form.name.value ) ? form.name.value : App.defaultProps.name,
				director: (form.director.value) ? form.director.value : App.defaultProps.director
			}
		this.setState({
			movies: this.state.movies.concat([movie])
		})

		form.reset()
	}

	fetchData() {
		// setTimeout( () => this.setState( { movies:movies } ), 3000 )
		$('#root')
			.fadeOut( 3000, () => this.setState( { movies:movies } ) )
			.fadeIn()
	}

	resetData() {
		// this.setState( { movies: [] } )
		$('#root')
			.fadeOut( 3000, () => this.setState( { movies:[] } ) )
			.fadeIn()
	}

	componentDidMount () {
		this.fetchData()
	}
	

	render() {
		if ( !this.state.movies.length ) {
			return (
				<div>
					<p>No movies available</p>
					<button onClick={this.fetchData}>Load movies</button>
				</div>
			)
		} else {
			return(
				<div>
					<MovieAddForm onAddMovie={this.handleOnAddMovie} />
					<MoviesList movies={this.state.movies} />
					<button onClick={this.resetData}>Delete movies</button>
				</div>
			)
		}
	}
}

App.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	director: PropTypes.string.isRequired
}

App.defaultProps = {
	id: uid(10),
	name: 'Unknown movie',
	director: 'Unassigned director'
}

export default App