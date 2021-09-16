import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from "./NavBar"
import { ItemListContainer } from './ItemListContainer';




const productos = [

  {
    precio: 5000,
   id: '1',
    title: 'Barril 10L',

  },
  {
    precio: 7000,
   id: '2',
    title: 'Barril 30L',

  },
  {
    precio: 15000,
    id: '3',
     title: 'Barril 50L',

  }
]

function getList() {
return new Promise ((resolve, reject) => {
  setTimeout(() => resolve(productos), 15000)
})
}

const App = () => {

const [listBirra, setListBirra] = useState ([]) 

useEffect (() => {

const list = getList()

  list.then(list => {
    setListBirra(list)

  })

  
}, [])




return (
  <div className="App">
    <header>

    

      <ItemListContainer saludo="¡Bienvenido!"/>

    </header>
 <div>
   <ul>
   {productos.map(beer => <li key={beer.id}>{beer.title}</li>)}
   </ul>
 </div>

  <itemCount/>
  
  <img scr={logo} className="App-logo" alt="logo" />

  </div>
);
}



export default App;
