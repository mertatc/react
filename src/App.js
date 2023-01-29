import './App.css';
import axios from 'axios';
import { useEffect } from 'react';


function App() {

  const key="1e06bd6c8dd72e862fdc5a0c15f48cea";

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${key}&units=metric`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[])
  return (
    <div className="App">
      HELLO
    </div>
  );
}

export default App;
