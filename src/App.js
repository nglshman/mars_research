import './App.css';
import Header from './header.js'
import Weather from './weather';
import MarsRover from './marsRover';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Weather />
        <MarsRover />
      </header>
    </div>
  );
}

export default App;
