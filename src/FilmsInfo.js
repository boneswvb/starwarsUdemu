import React from 'react';

const FilmsInfo = ({ id, title, created, director, producer, releaseDate, openingCrawl }) => {
	return(
		<div className='tc dib br3 pa3 ma3 grow bw2 shadow-5'>
				<p className='f1'>{ title }</p>
				<p>Film Number: { id }</p>	
				<p>Released Date: { releaseDate }</p>
				<p>Created: { created }</p>		
				<p>Director: { director }</p>
				<p>Producer: { producer }</p>
				<p>Opening Crawl: { openingCrawl }</p>
		</div>
	);
};

export default FilmsInfo;