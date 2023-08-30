import React from 'react';
import './App.css';
import { linkData } from './data/data';
import Navbar from './components/navbar/Navbar';
import Sections from './components/main-container/Sections';

function App() {

  return (
    <div className="App">
      <Navbar links={linkData} />
      <Sections links={linkData} />
    </div>
  );
}

export default App;
