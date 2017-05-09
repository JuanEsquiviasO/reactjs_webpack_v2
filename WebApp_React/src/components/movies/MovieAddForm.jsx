import React from 'react'
import uid from 'uid'
import Calendar from './Calendar'
import MultiSelect from './MultiSelect'
import { categories, directors } from '../../data'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './movie-add-form.css'

const optionsDirectors = directors.map( director => Object.assign( {}, { label: director, value: director } ) )
const optionsCategories = categories.map( cat => Object.assign( {}, { label: cat, value: cat } ) )

const MovieAddForm = props => (
	<form className="pure-form  AddForm" onSubmit={props.onAddMovie}>
		<input type="hidden" name="id" value={uid(10)} />
		<input type="text" placeholder="Movie title" name="name" />
		<input type="url" placeholder="Poster" name="poster" />
		<input type="url" placeholder="Web" name="url" />
		<input type="number" placeholder="Rate" name="rate" />
		<MultiSelect 
			name="director"
			placeholder="Choose the director or directors of the movie"
			options={optionsDirectors}
		/>
		<MultiSelect 
			name="categories"
			placeholder="Choose the categories of the movie"
			options={optionsCategories}
		/>
		<Calendar name="date" />
		<input className="pure-button pure-button-primary" type="submit" value="Save" />
	</form>
)

export default MovieAddForm
