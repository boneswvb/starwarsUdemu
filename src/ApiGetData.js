// import React from 'react';
import { ApiToGet } from './ApiToGet';

export const filmsUse = [];

const ApiGetData = async function() {
  try {
    const [ films, people, planets, species, starships, vehicles ] = await 
    Promise.all(ApiToGet.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));

    filmsUse.push(films)

    console.log('films', films);
    console.log('people', people);
    console.log('planets', planets);
    console.log('species', species);
    console.log('starships', starships);
    console.log('vehicles', vehicles);

  } catch (err) {
    console.log('ooooooops', err);
  }
}
console.log('apigetdata', filmsUse);
export default ApiGetData;

 
 
 
 
 
 