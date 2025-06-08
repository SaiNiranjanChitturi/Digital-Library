import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Sales from './components/Sales';
import Collection from './components/Collection';
import New from './components/New';
import MyLibrary from './components/MyLibrary';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Sale" element={<Sales />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/New" element={<New />} />
        <Route path="/MyLibrary" element={<MyLibrary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
