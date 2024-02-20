import { Link } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <BootstrapNavbar
            id="navbar"
            expand="lg"
            bg="dark"
            variant="dark"
            className="py-3 fixed-top"
        >
            <div className="container">
                <Link to="/" className="navbar-brand">Elm Aperture</Link>
                <BootstrapNavbar.Toggle aria-controls="navmenu"/>
                <BootstrapNavbar.Collapse id="navmenu">
                    <Nav className="ms-auto"  data-bs-theme="dark">
                        <NavDropdown title="Our Photographers" id="navbarDropdownMenuLink">
                            <NavDropdown.Item as={Link} to="/rain">Rain</NavDropdown.Item>
                            <NavDropdown.Item href="./meraki.html">Meraki</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </div>
        </BootstrapNavbar>
    );
}

export default Navbar;
