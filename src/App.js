import React from 'react';
import './App.css';
import FilmsLoop from './FilmsLoop';
import {filmsUse} from './ApiGetData';


function App() {
  return (
    <div className="App">
    	<p>heading</p>
      <FilmsLoop filmData={ filmsUse } />
      {console.log('app.js', filmsUse)}
    </div>
  );
}

export default App;
