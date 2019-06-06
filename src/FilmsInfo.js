import React from 'react';

const FilmsInfo = ({ id, title }) => {
	return(
		<div className='tc dib br3 pa3 ma3 grow bw2 shadow-5'>
			<p>Star War Films</p>
			<p>{ title }</p>
			<p>{ id }</p>
		</div>
	);
};

export default FilmsInfo;