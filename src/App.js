import './App.css';
import PokeGame from './PokeGame';
import pokemon from './pokemon'

function App() {
  return (
    <div className="App">
      <h1 className='main-header'>Pokedex</h1>
      <PokeGame
      pokemon = {pokemon}
      />
    </div>
  );
}

export default App;
