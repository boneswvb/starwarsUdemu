import React from 'react';

const PeopleInfo = ({ dob, eyeColor, gender, hairColor, height, mass, name, skinColor }) => {
	return(
		<div className='tc dib br3 pa3 ma3 grow bw2 shadow-5'>
				<p className='f1'>{ name }</p>
				<p>Birth Year: { dob }</p>
				<p>Eye Color: { eyeColor }</p> 
				<p>Gender: { gender }</p>
				<p>Hair Color: { hairColor }</p> 
				<p>Height: { height }</p> 
				<p>Mass: { mass }</p> 
				<p>Skin Color: { skinColor }</p> 		
		</div>
	);
};

export default PeopleInfo;