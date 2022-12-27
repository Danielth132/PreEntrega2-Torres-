import CartWidget from "./CartWidget";

function Navbar() {
    	return (
			<nav className="header__navbar">
        		<a className="header__link" href="#">Computadoras</a>
        		<a className="header__link" href="#">Notebooks</a>
        		<a className="header__link" href="#">Celulares</a>
				<a className="header__link" href="#">Perifericos/Accesorios</a>
				<CartWidget/>
      		</nav>
    	);
  }

export default Navbar;
