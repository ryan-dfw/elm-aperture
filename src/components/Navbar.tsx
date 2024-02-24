import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';

const Photographers = {
    Rain: 'Rain',
    Meraki: 'Meraki',
    Brayln: 'Brayln',
};

interface PhotographerNavbarProps {
    photographerName: string;
}

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const activePhotographer = Object.values(Photographers).find(name =>
        currentPath.startsWith(`/${name.toLowerCase()}`)
    );

    return (
        <>
            <BootstrapNavbar
                id="navbar"
                expand="lg"
                bg="dark"
                variant="dark"
                className="py-1 fixed-top"
            >
                <div className="container">
                    <Link to="/" className="navbar-brand">Elm Aperture</Link>
                    <BootstrapNavbar.Toggle aria-controls="navmenu"/>
                    <BootstrapNavbar.Collapse id="navmenu">
                        <Nav className="ms-auto">
                            <NavDropdown title="Our Photographers" id="navbarDropdownMenuLink">
                                {Object.values(Photographers).map(name => (
                                    <NavDropdown.Item key={name} as={Link} to={`/${name.toLowerCase()}`}>
                                        {name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </div>
            </BootstrapNavbar>

            {activePhotographer ? (
                <PhotographerNavbar photographerName={activePhotographer} />
            ) : null}

        </>
    );
}

const PhotographerNavbar: React.FC<PhotographerNavbarProps> = ({ photographerName }) => {
    return (
        <BootstrapNavbar
            bg="dark"
            variant="dark"
            className="py-1 fixed-top photographer-navbar"
            style={{ height: '30px', marginTop: '59px' }}
        >
            <div className="container d-flex align-items-center pnav-container">
                <p className="navbar-text">
                    {`I am ${photographerName}'s Navbar`}
                </p>
            </div>
        </BootstrapNavbar>
    );
};

export default Navbar;
