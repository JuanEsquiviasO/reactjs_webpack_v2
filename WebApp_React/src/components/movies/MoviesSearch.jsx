import React from 'react'
import './movies-search.css'

const MoviesSearch = props => (
  <form className="pure-form  SearchForm">
    <input type="search" id="search" name="search" onChange={props.onSearch} placeholder="Movies, Directors, Categories" />
    <label htmlFor="search">
      <i className="fa fa-search"></i>
    </label>
  </form>
)

export default MoviesSearch