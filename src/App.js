import React from 'react';
import './App.css';
import ClassFilmData from './ClassFilmData';
import ClassPeopleData from './ClassPeopleData';

function App() {
  return (
    <div className="App">
    	<p className="tc">App.js</p>
      <ClassFilmData />
      <ClassPeopleData />
    </div>
  );
}

export default App;