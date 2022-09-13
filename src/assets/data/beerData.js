let beerData= []
const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const res = await fetch(url);
    const data = await res.json();
    beerData = data
    return beerData
  }
console.log(beerData);
getBeers()
console.log(beerData);
export default beerData;