import React from 'react'
import "./SearchBox.scss"

const SearchBox = ({getSearchBoxValue}) => {
  return (
    {/* calls the function based on any user input */},
    <input className='search-box' type="text" placeholder='Search by name' onChange={getSearchBoxValue} />
  )
}

export default SearchBox