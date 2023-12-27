import Nav from "./Nav";

function Header() {
    return (
    <header>
        <img className="logo" src="Logo.svg" alt="logo"/>
        <Nav />
    </header>
    );
}

export default Header;