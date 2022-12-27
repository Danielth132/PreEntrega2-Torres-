import Navbar from "./Navbar"

const Header = (props) => {
    return (
        <header>
            <h1>{props.titulo}</h1>
            <Navbar/>
        </header>
    )
}

export default Header