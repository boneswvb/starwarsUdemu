import React from 'react';
import PeopleInfo from './PeopleInfo';


const PeoplesLoop = ({ peopleInformation }) => {
	return(
		<div>
			{
				peopleInformation.map((user, i) => {
					return(<PeopleInfo 
						key={i}
						id={ i + 1 }
						name={ peopleInformation[i].name }
					/>
					);
				})
			}
		</div>
	);
}

export default PeoplesLoop;