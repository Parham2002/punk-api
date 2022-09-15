import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const getSearchBoxValue = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="App">
      <Header/>
      <Nav getSearchBoxValue={getSearchBoxValue}/>
      <Main searchTerm = {searchTerm}/>

    </div>
  );
}

export default App;
