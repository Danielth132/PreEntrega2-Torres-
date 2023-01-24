import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer(props) {
    const[cargo , setCargo] = useState(false)
    const[productos, setProductos] = useState([])

    const props1 = useParams()
    console.log(props1)
    
    useEffect(()=>{
        const pedido =  fetch('https://fakestoreapi.com/products')

        pedido.then((respuesta)=>{

            const productos = respuesta.json()
            return productos
        })
        .then((productos)=>{
            console.log(productos)
            setProductos(productos)
            setCargo(true)
        })
        .catch((error)=>{
            console.log(error.json())
        })

    },[])

    return ( 
        <div>
            <p>El pedido a la base : {!cargo ? "Cargando..." : "Termino de cargar" }</p>
            <ItemList productos={productos}/>
        </div>
     );
}

export default ItemListContainer;