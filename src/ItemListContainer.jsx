import React from 'react';
import ItemCount from './ItemCount';

export const ItemListContainer = (props) => {
        
    const onAdd = (cant)=>{
            alert(cant)
        }
    return (

        <div>
            <p>{props.saludo}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    ) ;
}

export default ItemListContainer
