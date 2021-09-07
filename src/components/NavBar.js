
import CartWidget from './components/CardWidget'

const NavBar = () => {
  
    return (
    
     
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <a className="navbar-brand" href="index.html"><img src="gianlogo5.png" alt="Volver al Inicio" width={250} height={75} /> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">Inicio <span className="sr-only">(current)</span></a>   
            </li>
            <li className="nav-item">
              <a className="nav-link" href="productos.html">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contacto.html">Contacto</a>
            </li>
          </ul>
          <ul className="navbar-nav nav-flex-icons">

           <CartWidget />


            <li className="nav-item">
              <a href="https://www.facebook.com/genuina.beer" target="_blank" className="nav-link"><i className="fab fa-facebook-f" /></a>
            </li>
            <li className="nav-item">
              <a a href="https://www.twitter.com/genuina.beer" target="_blank" className="nav-link"><i className="fab fa-twitter" /></a>
            </li>
            <li className="nav-item">
              <a href="https://www.instagram.com/genuina.beer" target="_blank" className="nav-link"><i className="fab fa-instagram" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
    )
    }

    function ItemListContainer () {
      <h1>Este texto luego sera reemplazado por mi catalogo</h1>
    }

export default NavBar