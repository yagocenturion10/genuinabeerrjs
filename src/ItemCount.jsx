import {useState} from "react";



const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    function sumar(){
        setCount(count + 1)
    }
    function restar(){
        if (count-1)
        setCount(count - 1)
    }
    const agregarCarrito=()=>{
        onAdd(count)
    }

    
    return (
        <div>
            <h1>Contador</h1>
            <label>{count}</label><br/>
            <button onClick={sumar}>+</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
            <button onClick={restar}>-</button>
        </div>
    );
}

export default ItemCount;

