import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav>
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/reservations">RESERVATIONS</Link></li>
            <li><Link to="/order-online">ORDER ONLINE</Link></li>
            <li><Link to="/login">LOG IN</Link></li>
        </ul>
    </nav>
    );
}

export default Nav;