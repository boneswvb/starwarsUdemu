import React, { Component } from 'react';
import FilmsLoop from './FilmsLoop';

class ClassFilmData extends Component {
	constructor() {
		super()
		this.state = {
			films: []
		}
	}

	async componentDidMount() {
		const resp = await fetch('https://swapi.co/api/films/')
		const data = await resp.json()
			this.setState({ films: data.results });
			console.log('films', data.results)
	}

 	render() {
		return(
		<div>
			<h1 className="tc f2">Star Wars Films Made</h1>
			<FilmsLoop filmInformation={ this.state.films } />
		</div>
	);
	}	
}

export default ClassFilmData;