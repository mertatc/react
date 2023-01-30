import './App.css';
import React, {useState} from 'react';


function App() {

  const key="1e06bd6c8dd72e862fdc5a0c15f48cea";
  const [weatherData, setWeatherData] = useState([{}]);
 
  return (
    <div className="container">
      hellosaaaa
      <div>
        <input className="input" placeholder="Enter Ctiy..."/>
      </div>
    </div>
  );
}

export default App;
