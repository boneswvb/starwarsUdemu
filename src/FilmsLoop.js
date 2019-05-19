import React from 'react';
import FilmsInfo from './FilmsInfo';


const FilmsLoop = ({ filmData }) => {
	return(
		<div>
			{
				filmData.map((user, i) => {
					return(<FilmsInfo 
						key={i}
					/>
					);
				})
			}
		</div>
	);
}

export default FilmsLoop;