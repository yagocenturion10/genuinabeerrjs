import React from 'react';
import BackgroundImage from '../../assets/beerback1.jpg';

function Greeting ( {greeting} ){
	return (
		<div className="container card mt-3 border-0">
		  <img src={BackgroundImage} className="card-img" />
		  <div className="card-img-overlay text-white d-flex align-items-top justify-content-center">
		    <h1 className="card-title font-weight-bold text-uppercase">{greeting}</h1>
		  </div>
		</div>
		)
}

export default Greeting;