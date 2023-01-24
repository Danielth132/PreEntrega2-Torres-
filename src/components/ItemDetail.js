const ItemDetail = ({producto}) => {
    return ( 
        <div>
            <article key={producto.id}>
                    <h3>{producto.title}</h3>
                    <img src={producto.image} alt={producto.title} />
                    <p>${producto.price}</p>
                    <p>{producto.description}</p>
                    <button>Comprar</button>
            </article>
        </div>
     );
}
 
export default ItemDetail;