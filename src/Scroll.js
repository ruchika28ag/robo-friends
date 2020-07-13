import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{ overflow: 'auto', height: '75vh'}}>
			{props.children}
		</div>
	);
};

export default Scroll;