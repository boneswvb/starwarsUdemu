import React from 'react';
import FilmsInfo from './FilmsInfo';


const FilmsLoop = ({ filmInformation }) => {
	return(
		<div>
			{
				filmInformation.map((user, i) => {
					return(<FilmsInfo 
						key={i}
						id={ filmInformation[i].episode_id }
						title={ filmInformation[i].title }
						created={ filmInformation[i].created }
						director={ filmInformation[i].director }
						producer={ filmInformation[i].producer }
						releaseDate={ filmInformation[i].release_date }
						openingCrawl={ filmInformation[i].opening_crawl }
					/>
					);
				})
			}
		</div>
	);
}

export default FilmsLoop;