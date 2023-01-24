import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Nav(props) {

	const {isHeader, textLinkFooter, hrefLinkFooter} = props

	if (isHeader) {
    	return (
      		<nav className="header__navbar">
        		<Link className="header__link" to="/productos/ropadehombre">Ropa de hombre</Link>
        		<Link className="header__link" to="/productos/ropademujer">Ropa de mujer</Link>
				<Link className="header__link" to="/productos/joyeria">Joyeria</Link>
				<Link className="header__link" to="/productos/electronicos">Electronicos</Link>
				<CartWidget/>
      		</nav>
    	);
  	} else {
    	return (
      		<nav className="header__navbar">
        		<a href={hrefLinkFooter}>{textLinkFooter}</a>
    		</nav>
    );
  }
}

export default Nav;
