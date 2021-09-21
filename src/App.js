import React from 'react';
import { useState} from 'react';
import './App.css';
import './Estilos.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MiNavBar from './MiNavBar'
import Contact from './views/Contact';
import Products from './views/Products';
import ItemListContainer from './views/ItemListContainer';



const App = () => {

  const [productos, setProductos] = useState ([])
  const [input, setInput] = useState ('')


const handleForm = (event) => {

  event.preventDefault()

  fetch (`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)

  .then(res => {return res.json ()})
  
  .then( function (respuesta) { 
    setProductos(respuesta.results.slice(0,10))
  })
}




  return (

   <div className="App">
    <BrowserRouter>
      <MiNavBar/>

        <Switch>

          <Route exact path='/'>
              <ItemListContainer/>
          </Route>

          <Route  path='/ItemListContainer/'>
              <ItemListContainer/>
          </Route>

          <Route path='/products'>
            <Products/>
          </Route>

          <Route path='/contact'>
            <Contact/>
          </Route>

        </Switch>
    </BrowserRouter>

   

<>


  
</>


    <div>
          <form onSubmit={handleForm}>
            <input type='text' onChange={(event) => setInput(event.target.value)} />
            <button type='submit'>Buscar</button>  
          </form>
    </div>
    

     


   </div>


  
);}


export default App;
