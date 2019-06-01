import React, { Component } from 'react';
import FilmsLoop from './FilmsLoop';
import {filmsUse} from './ApiGetData';

class ClassFilmData extends Component {
	render() {
		return(
		<div>
			<p className="tc f1">Wim - classfilmdata</p>
			<FilmsLoop apiData={ filmsUse }/>
		</div>
	);
	}	
}

export default ClassFilmData;