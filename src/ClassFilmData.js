import React, { Component } from 'react';
import FilmsLoop from './FilmsLoop';
import ApiGetData from './ApiGetData';

class ClassFilmData extends Component {
	render() {
		return(
		<div>
			<p className="tc f1">Wim - classfilmdata</p>
			<FilmsLoop apiData={ ApiGetData }/>
		</div>
	);
	}	
}

export default ClassFilmData;