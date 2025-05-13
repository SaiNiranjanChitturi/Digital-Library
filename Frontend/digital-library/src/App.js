import './App.css';
import axios from 'axios';
function App() {
  return (
    axios.get('/api/helloworld')
      .then((result) => console.log(result.data))
      .catch(console.error)
  );
}

export default App;
