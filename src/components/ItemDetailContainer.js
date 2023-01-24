import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const ItemDetailContainer = () => {
    const[cargo , setCargo] = useState(false)
    const[productos, setProductos] = useState({})

    const params = useParams()
    const paramsId = params.id 

    useEffect(()=>{
        const pedido =  fetch('https://fakestoreapi.com/products/'+paramsId)

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
            <ItemDetail producto={productos}/>
        </div>
    )
}

export default ItemDetailContainer