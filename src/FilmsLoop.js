import React from 'react';
import FilmsInfo from './FilmsInfo';


const FilmsLoop = ({ filmInformation }) => {
	return(
		<div>
			{
				filmInformation.map((user, i) => {
					return(<FilmsInfo 
						key={i}
						id={ i + 1 }
						title={ filmInformation[i].title }
					/>
					);
				})
			}
		</div>
	);
}

export default FilmsLoop;