import React from 'react';
import Card from './Card'

const CardList = ({contacts}) => {
	return (
		<div>
			{contacts.map((user, i) => {
		return (<Card 
		key={contacts[i].id} 
		id={contacts[i].id} 
		name={contacts[i].name} 
		email={contacts[i].email}/>
		);
	})}
		</div>
	);
}

export default CardList;