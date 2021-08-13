import React, {useState} from 'react';
import './App.css';
import BreweryForm from './BreweryForm';
import BreweryDisplay from './BreweryDisplay';

function App() {
  const [breweryList, setBreweryList] = useState([]);

  const handleBreweryList = (newList) => {
    setBreweryList(newList);
  }

    return (
      <div>
          {/* Using The Open Brewery DB https://www.openbrewerydb.org/ build up a form that allows
              the user to type the name of a state of the United States and fetch to the api all breweries 
              listed in that state. The list of breweries must be saved in the state and displayed in the page.
              */}
        <header className="App-header">
          <h1>Welcome to Brewery Finder</h1>
        </header>
        <div>
          <BreweryForm breweryList={breweryList} handleBreweryList={handleBreweryList}/>
          <BreweryDisplay breweryList={breweryList} />
        </div>
      </div>
    );
}

export default App;
