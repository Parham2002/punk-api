import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

function App() {
  // Assigns entered search text to a variable for later use
  const [searchTerm, setSearchTerm] = useState("")
  const getSearchBoxValue = (event) => {
    setSearchTerm(event.target.value)
  }
  return (
    <div className="App">
      {/* Containers of the app along with their props */}
      <Header/>
      <Nav getSearchBoxValue={getSearchBoxValue}/>
      <Main searchTerm = {searchTerm.toLowerCase()}/>

    </div>
  );
}

export default App;
