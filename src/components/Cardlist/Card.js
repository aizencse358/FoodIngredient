import React from 'react';

const Card = (props) => {
	const{name}=props
	return (
       <div className='tc bg-light-green dib br3 pa4 mt6  grow bw2 shadow-5'>
       <div>
       <h2>{name}</h2>
       </div>
       </div>



	);
}

export default Card;