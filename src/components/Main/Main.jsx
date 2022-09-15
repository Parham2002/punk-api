import React, { useEffect } from 'react'
import "./Main.scss"
import Card from '../Card/Card'
import { useState } from 'react'

const Main = ({searchTerm}) => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setBeers(data)
  }
  getBeers()
  
 
useEffect(() => {
    if(beers.length === 0 ){
      return 
    }
    const filterSearch = beers.filter((beer) => beer.name.includes(searchTerm))
    setBeers(filterSearch)
  }, [searchTerm])

  return (
    <div className='main'>
      {beers?.map((beer) => {
        return (<Card key={beer.id} data={beer}/>)
      })}
    </div>
  )
}

export default Main