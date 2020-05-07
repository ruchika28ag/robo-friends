import React from 'react';

const card=({name, email, id})=>{
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow br2 shadow-5 tc'>
			<img alt='robots' src={`https://robohash.org/${id}?100x100`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default card;