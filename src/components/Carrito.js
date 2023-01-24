const Carrito = () => {
    const handleClick = () => {
        console.log("test click")
    }
    return ( 
        <div>
            <button onClick={handleClick} >Terminar compra</button>
        </div>
     );
}
 
export default Carrito;