import React, { Component } from 'react';
import PeoplesLoop from './PeoplesLoop';

class ClassPeopleData extends Component {
	constructor() {
		super()
		this.state = {
			people: []
		}
	}
	
async componentDidMount() {
	  const resp = await fetch('https://swapi.co/api/people/')
	  const data = await resp.json(); 
	  this.setState({ people: data.results })
	  console.log('people', data.results)
	}

 	render() {
		return(
		<div>
			<h1 className="tc f2">Star Wars People</h1>
			<PeoplesLoop peopleInformation={ this.state.people } />
		</div>
	);
	}	
}

export default ClassPeopleData;