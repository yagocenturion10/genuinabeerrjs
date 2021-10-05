import React from 'react';
import CartIcon from './CartIcon.js';
import NavBarElement from './NavBarElement.js';
import { Link } from 'react-router-dom';

const categories = [
					{id:1, category: 'Cervezas de autor'},
					{id:2, category: 'Cervezas propias'},
					{id:3, category: 'Servicios'}
					]

function Navbar() {

	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: '#0cbaba;'}} >    
			
			
				<Link className="navbar-brand" to="/"><img style={{height: '80px'}} src='https://png.pngtree.com/png-clipart/20190516/original/pngtree-marking-elements-of-craft-beer-png-image_3711078.jpg'/></Link>
				<div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav ml-auto">
		  				<NavBarElement name="Home" destination="/" />
				      	<NavBarElement name="Productos" destination="/" />
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorías</a>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
								{categories.map(category =>
												<a href={`/category/${category.id}`} className="dropdown-item">{category.category}</a>
												)}
							</div>
						</li>
						<NavBarElement name="Contacto" destination="/" />
						<CartIcon />
					</ul>
	  			</div>
			</nav>
		)
}

export default Navbar;