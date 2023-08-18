import React from 'react';
import './App.css';
import { dataType, dat } from './data/data';
import Navbar from './components/navbar/Navbar';
import Sections from './components/main-container/Sections';

function App() {
  console.log(dat);

  return (
    <div className="App">
      <Navbar data={dat} />
      <Sections data={dat} />
    </div>
  );
}

export default App;
