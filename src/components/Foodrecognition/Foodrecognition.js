import React from 'react'
import Card from './Card';

const Foodrecognition = ({imageurl,foods}) => {
	return(
	<div className='mw5 mw7-ns center pa3 ph5-ns'>
		<div className='absolute mt2 '>
			<img id='inputimage' alt='' src={imageurl} width='400px' height='auto'/>
		</div>
			<div className='mt7 pt5 pa4 '>
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
  
		</div>

		
    

		);



}

export default Foodrecognition;