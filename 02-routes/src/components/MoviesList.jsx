 import React from 'react'
 import Movie from './Movie'

const MoviesList = ( props ) => (
	<ul>
		{
			props.movies.map(movie =>	(
				<Movie
					key={movie.id}
					id={movie.id}
					name={movie.name}
					director={movie.director}
				/>
			))
		}
	</ul>
)

export default MoviesList
