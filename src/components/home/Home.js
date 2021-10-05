import React from 'react';
import Greeting from './Greeting.js';
import ItemList from './ItemList.js';

const Home = function () {
	const greeting = "Bienvenido a GenuinaBeer";
	return(
		<>
		<Greeting greeting={greeting} />
		<ItemList />
		</>)
}

export default Home;