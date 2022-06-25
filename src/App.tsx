import React from 'react';
import './App.scss';
import CatsPage from './container/CatsPage/CatsPage';
import NavBar from './container/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CatsPage/>
    </div>
  );
}

export default App;
