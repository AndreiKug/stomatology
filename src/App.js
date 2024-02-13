import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tree from './Components/Tree/Tree';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://andreikug.github.io/data-json/data.json')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

  return (
    <div className="App" style={{margin: 20}}>
        <h1>Стоимость услуг</h1>
        {data.length === 0 ? <div>Loading...</div> : <Tree data={data} />}               
    </div>
  );
}

export default App;

