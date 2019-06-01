import React from 'react';
import FilmsInfo from './FilmsInfo';

const FilmsLoop = ({ apiData }) => {
	return(
		<div className="tc f1 unknown">
		{
			setTimeout(() => {
				console.log(apiData , 'apiData')
				apiData.map((answers, i) => {
					return(<FilmsInfo 
						key={ i }
						planet={ apiData[i].results[i].name }
					/>
					);
				})
			},5000)
		}
		</div>
	);
}

export default FilmsLoop;
