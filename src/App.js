import './App.css';
import Header from './components/header.js';
import {Routes, Route} from 'react-router-dom';
import Weather from './components/weather';
import MarsRover from './components/marsRover';

function App() {
  return (
    <div className='App'>
      <Header />
        <Routes>
         <Route path="weather" element={<Weather />} />
         <Route path="mars_rover" element={<MarsRover />} />
        </Routes>
       
    </div>
  );
}

export default App;
