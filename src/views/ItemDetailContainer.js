
import React from 'react'

const item= [

    {
        id: '1',
        precio: 5000,
        title: 'Barril 10L',
  
    },
    {
        id: '1',
        precio: 10000,
        title: 'Barril 30L',
  
    },
    {
        id: '1',
        precio: 22000,
        title: 'Barril 50L',
  
    }
  ]


const ItemDetailContainer = ({item}) => {
    return (
        <>
           <h2>{item.id}</h2>
           <h2>{item.precio}</h2>
           <h2>{item.title}</h2>
        </>
    )
}

export default ItemDetailContainer;
