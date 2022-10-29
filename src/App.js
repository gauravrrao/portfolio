import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/skills" element={<Skills/>}/>
      <Route path = "/about" element={<About/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
