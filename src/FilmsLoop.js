import React from 'react';
import FilmsInfo from './FilmsInfo';

const FilmsLoop = ({ apiData }) => {
	return(
		<div>
			{
				apiData.map((answers, i) => {
					return(<FilmsInfo 
						key={ i }
						planet={ answers[i].name }
					/>
					);
				})
			}
		</div>
	);
}

export default FilmsLoop;