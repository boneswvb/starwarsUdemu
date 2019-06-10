import React, { Component } from 'react';
import FilmsLoop from './FilmsLoop';

class ClassFilmData extends Component {
	constructor() {
		super()
		this.state = {
			films: []
		}
	}

	componentDidMount() {
				fetch('https://swapi.co/api/films/')
				.then(resp => resp.json())
				.then(filmNames => {this.setState({ films: filmNames.results })});
	}

 	render() {
		return(
		<div>
			<h1 className="tc f2">Star Wars Films made</h1>
			<FilmsLoop filmInformation={ this.state.films } />
		</div>
	);
	}	
}

export default ClassFilmData;