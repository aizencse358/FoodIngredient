import React from 'react';
import Card from './Card';

const Cardlist = ({foods}) =>{
	return (
	<div>
	{
	foods.map((user,i) => {
		return ( 
			<Card 
			name={foods[i].name} 
			/>
			);
	})
}
    </div>



	);
}

export default Cardlist;