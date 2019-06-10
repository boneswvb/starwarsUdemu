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
	  const resp = await fetch('https://swapi.co/api/people/')
	  const data = await resp.json(); 
	  console.log(data.results);
	  // this.setState({ people: data.results })
	}
	gettingData();
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



 // this.setState({ people: data.results })