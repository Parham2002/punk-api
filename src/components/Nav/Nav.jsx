import React from "react"
import "./Nav.scss"
import SearchBox from "../SearchBox/SearchBox"


const Nav = ({getSearchBoxValue}) => {

  return (
    <div className='nav-bar'>
      <SearchBox getValue={getSearchBoxValue}/>
      <form className='nav-bar__buttons'>
        <p>High Alcohol (ABV &gt; 6.0%) <input type="checkbox" /></p>
        <p>Classic Range (Was first brewed before 2010) <input type="checkbox" /></p>
        <p>High Acidity (pH lower than 4) <input type="checkbox" /></p>
      </form>

    </div>
  )
}

export default Nav