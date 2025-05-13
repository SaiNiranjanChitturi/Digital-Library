import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('/api/helloworld')
      .then((result) => console.log(result.data))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>Check the console for the response from the API!</h1>
    </div>
  );
}

export default App;
