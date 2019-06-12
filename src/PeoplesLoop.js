import React from 'react';
import PeopleInfo from './PeopleInfo';


const PeoplesLoop = ({ peopleInformation }) => {
	return(
		<div>
			{
				peopleInformation.map((user, i) => {
					return(<PeopleInfo 
						key={i}
						name={ peopleInformation[i].name }
						dob={ peopleInformation[i].birth_year }
						eyeColor={ peopleInformation[i].eye_color }
						gender={ peopleInformation[i].gender }
						hairColor={ peopleInformation[i].hair_color }
						height={ peopleInformation[i].height }
						mass={ peopleInformation[i].mass }
						skinColor={ peopleInformation[i].skin_color }
					/>
					);
				})
			}
		</div>
	);
}

export default PeoplesLoop;