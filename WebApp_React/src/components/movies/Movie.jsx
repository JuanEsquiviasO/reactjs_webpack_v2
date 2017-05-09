 import React from 'react'

 const Movie = (props) => (
	 <li className="MoviesList-item">
	 	<a className="MoviesList-link" href={props.url} target="_blank">
		 <figure>
			<img src={props.poster} alt={props.name} />
			<figcaption>
				<h2>{props.name}</h2>
			</figcaption>
		 </figure>
		</a>
		<section>
			<p>
        <i className="fa fa-film"></i>
        {props.director}
      </p>
      <p>
        <i className="fa fa-calendar-o"></i>
        {props.date}
      </p>
      <p>
        <b>
          <i className="fa fa-imdb"></i>
          {props.rate}
        </b>
        <b>
          <i className="fa fa-bolt"></i>
          {props.id}
        </b>
      </p>
      <p>
        <i className="fa fa-tags"></i>
        {
          props.categories.map(
            (cat, index, arr) => 
              ( index === arr.length - 1 )
                ? cat
                : `${cat}, `
          )
        }
      </p>
		</section>
	 </li>
 )

export default Movie