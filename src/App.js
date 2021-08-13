import React, {useState, useEffect} from 'react';
import './App.css';
import BreweryForm from './BreweryForm';

function App() {
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
          <BreweryForm />
        </div>
      </div>
    );
}

export default App;
