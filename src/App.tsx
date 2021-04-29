import React from 'react';
import './App.css';
import Homepage from './components/Home';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/pokemon/:id" component={PokemonDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
