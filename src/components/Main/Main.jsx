import React, { useEffect } from 'react'
import "./Main.scss"
import Card from '../Card/Card'
import { useState } from 'react'

const Main = ({searchTerm}) => {
  // Updates the beers array without refreshing the whole page
  const [beers, setBeers] = useState([]);

  // Function to take data from an API
  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    const filterSearch = data.filter((beer) => beer.name.toLowerCase().includes(searchTerm))
    setBeers(filterSearch)
  }
  
  // UseEffect to call the function on page load and anytime searchTerm variable changes
  useEffect(() => {
    getBeers()
  },[searchTerm])
 
  return (
    <div className='main'>
      {/* creates a card for each object inside of the beers array */}
      {beers.map((beer) => {
        return (<Card key={beer.id} data={beer}/>)
      })}
    </div>
  )
}

export default Main