 import React from 'react'
 import Movie from './Movie'

const MoviesList = ( props ) => (
	<div>
		<form onSubmit={props.onAddMovie}>
			<input type="text" placeholder="Movie title" name="name" required />
			<input type="text" placeholder="Director" name="director" required />
			<input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
			<input type="submit" value="Save" />
		</form>
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
	</div>
)

export default MoviesList
