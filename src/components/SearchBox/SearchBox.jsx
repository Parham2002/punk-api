import React from 'react'
import "./SearchBox.scss"

const SearchBox = ({getValue}) => {
  return (
    <input className='search-box' type="text" placeholder='Search by name' onChange={getValue} />
  )
}

export default SearchBox