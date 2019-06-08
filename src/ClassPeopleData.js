import React, { Component } from 'react';
import PeoplesLoop from './PeoplesLoop';

class ClassPeopleData extends Component {
	constructor() {
		super()
		this.state = {
			people: []
		}
	}
componentDidMount() {
	const gettingData = async function() {
	  const response = await fetch('https://swapi.co/api/people/')
	  const data = await response.json();
	  .then(data => {this.setState({ people: data.results })});
	  console.log(gettingData.results);
	}
}

 	render() {
		return(
		<div>
			<h1 className="tc f2">Star Wars people</h1>
			<PeoplesLoop peopleInformation={ this.state.people } />
		</div>
	);
	}	
}

export default ClassPeopleData;