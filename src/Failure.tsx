import React from 'react';
import desp from './assets/desp.png';

export const Failure = () => {
	return (
		<div style={{margin: 20}}>
			<h2>Lo sentimos, su pago no se ha podido realizar.</h2>
			<h4>Inténtelo mas tarde.</h4>
			<img style={{height: 50, width: 50}} src={desp} alt="sorry" />
		</div>
	);
};
