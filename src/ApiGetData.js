// import React from 'react';
import { ApiToGet } from './ApiToGet';

export const filmsUse = [];
const peopleUse = [];
const planetsUse = [];
const speciesUse = [];
const starshipsUse = [];
const vehiclesUse = [];

const ApiGetData = async function() {
	try{
  const [ films, people,planets, species, starships, vehicles ] = 
    await Promise.all(ApiToGet.map(url =>
      fetch(url)
      .then(resp => resp.json())
  ));
		filmsUse.push(films[0].results);
		peopleUse.push(people);
		planetsUse.push(planets);
		speciesUse.push(species);
		starshipsUse.push(starships)
		vehiclesUse.push(vehicles);
	} catch(err) {
		console.log('oooooooops', err);
}
}
	
export default ApiGetData;