import React from 'react'
import './Inputlink.css';

const Inputlink = ({oninputchange,onbuttonsubmit}) => {
	return(
	<div>
    <p className='f3'> {'Enter Image here'} </p>
    <div className = 'center'>
    <div className='form mt5 center pa4 br3 '>
    <input className='f4 pa2  center' type='tex' onChange={oninputchange}/>
    <button className=' grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onbuttonsubmit}> Detect </button>
	</div>
	</div>
	</div>

		
    

		);



}

export default Inputlink;