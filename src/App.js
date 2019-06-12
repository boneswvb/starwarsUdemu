import React from 'react';
import './App.css';
import ClassFilmData from './ClassFilmData';
import ClassPeopleData from './ClassPeopleData';
import ClassPlanetsData from './ClassPlanetsData';

function App() {
  return (
    <div className="App">
    <p className="tc">Created by Wim von Benecke - Udemy training project 2019</p>
      <ClassFilmData />
      <ClassPeopleData />
      <ClassPlanetsData />
    </div>
  );
}

export default App;