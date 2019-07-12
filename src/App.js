import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Wizard from './components/Wizard';



function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Wizard />
    </div>
  );
}

export default App;
