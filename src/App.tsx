import React from 'react';
import './App.css';
import './components/PokemonCard.module.scss';
import { ShowPokemon } from './components/Pokemon';
import bg from './assets/salam.png';

function App() {
  return (
    <div className="App">
      <header className="min-h-screen bg-fixed bg-no-repeat pt-6 pb-12" style={{backgroundImage: `url(${bg})`}}>
        <h2 className="text-white text-xl my-8 font-mono">Welcome to your pokeApp</h2>
        <ShowPokemon />
      </header>
    </div>
  );
}

export default App;
