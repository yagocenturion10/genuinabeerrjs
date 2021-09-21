import Beer1 from '../beer1.png';
import Beer2 from '../beer2.png';
import Beer3 from '../beer3.png';
import * as ReactDOM from 'react'
import App from '../App'
import { NavLink, Link } from 'react-router-dom';

const ItemListContainer = () => {

    return(

        <div className='ItemListContainer'>

            <h1>  PANTALLA DE INICIO </h1>

            <div className="wrapper">
      <Card
        img={Beer1}
        title="Wiener Beer"
        description="Caracterizada por una suave maltosidad, que otorga sequedad en el acabado evitando la persistencia del sabor dulce. De cuerpo medio-liviano a medio, con una suave cremosidad."
      />

      <Card
        img={Beer2}
        title="German Pilsner"
        description="Sabor amargo y fresco, con un acabado seco a medio-seco. El sabor a malta es moderado a moderado-bajo. El amargor del lúpulo domina el gusto, continúa en el acabado y persiste en el retrogusto."
      />

      <Card
       img={Beer3}
        title= "Irish Red Ale "
        description="De color cobre profundo, medianamente turbia, con espuma densa y cremosa. En nariz se aprecian aromas a caramelo con suaves notas a lúpulo. En boca se denota un leve dulzor y sabor a granos tostados."
      />

    </div>



        </div>
    );



    function Card(props) {
        return (
          <div className="card">
            <div className="card__body">
              <img src={props.img} class="card__image" alt="no"/>
              <h2 className="card__title">{props.title}</h2>
              <p className="card__description">{props.description}</p>
            </div>
            <button className="card__btn">
              
            <NavLink to='/ItemDetailContainer' activeClassName='navLink' className='Option'>
          DETALLES
         </NavLink>


            </button>
            <button className="card__btn">Consultar Stock</button>
          </div>
        );
      
        ReactDOM.render(<App />, document.getElementById("root"));
      }
      
} 

export default ItemListContainer;