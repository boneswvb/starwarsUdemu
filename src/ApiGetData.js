// import React from 'react';
import { ApiToGet } from './ApiToGet';

const ApiGetData = async function() {
	try{
	  const films = 
	    await Promise.all(ApiToGet.map(url =>
	      fetch(url)
	      .then(resp => resp.json())
	  ));
	    console.log('film title - ', films.results)
			return(films);
		} catch(err) {
			console.log('oooooooops', err);
	}
}
ApiGetData();
	
export default ApiGetData;