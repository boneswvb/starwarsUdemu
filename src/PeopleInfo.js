import React from 'react';

const PeopleInfo = ({ id, name }) => {
	return(
		<div className='tc dib br3 pa3 ma3 grow bw2 shadow-5'>
				<p>Star Wars People</p>
				<p>{ name }</p>
				<p>Person Number { id }</p>			
		</div>
	);
};

export default PeopleInfo;