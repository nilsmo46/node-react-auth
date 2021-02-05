import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [city, setCity] = useState(null)

  const getData = async () => {
    const response = await axios.get(
      'https://raw.githubusercontent.com/rahulattainu/cities/master/cities.json'
    );
    setCity(response.data);
    console.log(response.data);
  };

  return (
    <div className="App">
      <span>Click the button to fetch the cities</span>
      <br />
      <button onClick={() => getData()}>Get Cities</button>
      {city && city.map(cityy => 
        <li>
          {cityy.name}, {cityy.state}
        </li>
      )}
    </div>
  );
}

export default App;
