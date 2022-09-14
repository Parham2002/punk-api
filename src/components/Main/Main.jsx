import React, { useEffect } from 'react'
import "./Main.scss"
import Card from './Card/Card'
import { useState } from 'react'

const Main = () => {
  const [beers, setBeers] = useState();

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    setBeers(data)
  }
  useEffect(() => {
    getBeers()
  }, [])

  return (
    <div className='main'>
      {beers?.map((beer) => {
        return (<Card key={beer.id} data={beer}/>)
      })}
    </div>
  )
}

export default Main