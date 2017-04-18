import React from 'react'

const MovieAddForm = props => (
	<form onSubmit={props.onAddMovie}>
		<input type="text" placeholder="Movie title" name="name" />
		<input type="text" placeholder="Director" name="director" />
		<input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
		<input type="submit" value="Save" />
	</form>
)

export default MovieAddForm
