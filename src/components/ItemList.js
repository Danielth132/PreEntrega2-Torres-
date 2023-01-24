import Item from "./Item";

//se usa {} y dentro el nombre de la prop que recibimos
const ItemList = ({productos}) => {
    return ( 
        <div>
            {productos.map((producto)=>{
            return (
                <Item producto={producto} key={producto.id} />
            )
            })}
        </div>
     );
}
 
export default ItemList;