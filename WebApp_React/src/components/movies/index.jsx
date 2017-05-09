import React, { Component, PropTypes } from 'react'
import uid from 'uid'
import { categories, movies, directors } from '../../data/'
import MovieAddForm from './MovieAddForm'
import MoviesSearch from './MoviesSearch'
import MoviesList from './MoviesList'

class Movies extends Component {
	constructor(...props) {
		super(...props)

		this.state = {
			movies: movies,
			directors: directors,
			categories: categories,
			filter: {
				name: '',
				director: '',
				categories: [],
				search: ''
			}
		}

		this.handleOnAddMovie = this.handleOnAddMovie.bind(this)
		this.handleOnSearch = this.handleOnSearch.bind(this)
		this.handleOnFilter = this.handleOnFilter.bind(this)
	}

	handleOnAddMovie(e) {
		//alert('Event in React')
		e.preventDefault()

		let form = e.target,
			movie = {
				id: ( form.id.value ) ? form.id.value : Movies.defaultProps.id,
				name: ( form.name.value ) ? form.name.value : Movies.defaultProps.name,
        poster: (form.poster.value) ? form.poster.value : Movies.defaultProps.poster,
				url: (form.url.value) ? form.url.value : Movies.defaultProps.url,
				rate: (form.rate.value) ? form.rate.value : Movies.defaultProps.rate,
				director: (form.director.value) ? form.director.value : Movies.defaultProps.director,
				date: form.date.value ? form.date.value : Movies.defaultProps.date,
				categories: (form.categories.value) ? form.categories.value.split(',') : Movies.defaultProps.categories
			}
		this.setState({
			movies: this.state.movies.concat([movie])
		})

		form.reset()
	}

	handleOnSearch(e) {
		let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )

		this.setState({
			filter: newFilter
		})

		// console.log(newFilter)
	}

	handleOnFilter(filter, data) {
		let regex = new RegExp(filter.search, 'i')
		return data.filter( q => ( regex.test(q.name) || regex.test(q.director) || regex.test(q.categories) ))
	}

	render() {
		if ( !this.state.movies.length ) {
			return (
				<article className="Main-container">
					<p>No movies available</p>
				</article>
			)
		} else {
			return(
				<article className="Main-container">
					<MovieAddForm onAddMovie={this.handleOnAddMovie} />
					<MoviesSearch onSearch={this.handleOnSearch} />
					<MoviesList movies={this.handleOnFilter(this.state.filter, this.state.movies)} />
				</article>
			)
		}
	}
}

Movies.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired,
	director: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
}

Movies.defaultProps = {
	id: uid(10),
	name: 'Unknown movie',
	poster: 'https://pbs.twimg.com/profile_images/780796992611942405/qj7ytv9v.jpg',
  url: 'http://www.imdb.com/',
	rate: 40,
	director: 'Unassigned director',
	date: 'Date not defined',
  categories: ['Without category']
}

export default Movies