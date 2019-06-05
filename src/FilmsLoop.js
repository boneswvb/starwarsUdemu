import React from 'react';
import FilmsInfo from './FilmsInfo';

const FilmsLoop = ({ apiData }) => {
	return(
		<div className="tc f1 unknown">
		{
				apiData.map((answers, i) => {
					return(<FilmsInfo 
						key={ i }
						// title={ apiData.films.results[i].title }
					/>
					);
				})
		}
		</div>
	);
}

export default FilmsLoop;
