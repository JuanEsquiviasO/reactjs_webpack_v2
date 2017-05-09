 import React from 'react'
 import Movie from './Movie'
 import './movies-list.css'

const MoviesList = ( props ) => (
	<ul className="MoviesList">
		{
			props.movies.map(movie =>	(
				<Movie
					key={movie.id}
					id={movie.id}
					name={movie.name}
					poster={movie.poster}
					url={movie.poster}
					rate={movie.rate}
					director={movie.director}
					date={movie.date}
					categories={movie.categories}
				/>
			)).reverse()
		}
	</ul>
)

export default MoviesList
