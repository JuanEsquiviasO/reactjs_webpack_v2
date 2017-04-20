import React from 'react'
import uid from 'uid'

// https://www.npmjs.com/package/react-datepicker
// https://github.com/Hacker0x01/react-datepicker
// https://hacker0x01.github.io/react-datepicker/

const MovieAddForm = props => (
	<form onSubmit={props.onAddMovie}>
		<input type="text" placeholder="Movie title" name="name" />
		<input type="text" placeholder="Director" name="director" />
		<input type="date" placeholder="Release date" name="date"/>
		<input type="hidden" name="id" value={uid(10)} />
		<input type="submit" value="Save" />
	</form>
)

export default MovieAddForm
