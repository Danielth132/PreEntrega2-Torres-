import { Link } from "react-router-dom";

function CartWidget() {
    return ( 
        <>
        <Link to="/carrito" >
			<span className="material-icons">shopping_cart</span>
		</Link>
        <a className="num__cart" href="#">0</a>
        </>
     );
}

export default CartWidget;