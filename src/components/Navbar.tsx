import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';
import { useContextValue } from '../contexts/Context';

const RealEstateLinks = {
    Commercial: 'Commercial',
    Hotel: 'Hotel',
    Residential: 'Residential',
};

const Photographers = {
    Rain: 'Rain',
    Meraki: 'Meraki',
    Brayln: 'Brayln',
};

const Navbar: React.FC = () => {
    const { shouldShowNav } = useContextValue();

    return shouldShowNav ? (
        <div>
            <BootstrapNavbar
                id="navbar"
                expand="lg"
                bg="dark"
                variant="dark"
                className="py-1 fixed-top"
            >
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Elm Aperture
                    </Link>
                    <BootstrapNavbar.Toggle aria-controls="navmenu" />
                    <BootstrapNavbar.Collapse id="navmenu">
                        <Nav.Link disabled className={'invisible'}>
                            __________________
                        </Nav.Link>
                        <Nav.Link disabled className={'text-danger'}>
                            Under Construction
                        </Nav.Link>
                        <Nav className="ms-auto" data-bs-theme="dark">
                            <NavDropdown title="Real Estate" id="realEstateDropdown">
                                {Object.values(RealEstateLinks).map((category) => (
                                    <NavDropdown.Item
                                        key={category}
                                        as={Link}
                                        to={`/${category.toLowerCase()}`}
                                    >
                                        {category}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="Our Photographers" id="photographersDropdown">
                                {Object.values(Photographers).map((name) => (
                                    <NavDropdown.Item
                                        key={name}
                                        as={Link}
                                        to={`/${name.toLowerCase()}`}
                                    >
                                        {name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </div>
            </BootstrapNavbar>
        </div>
    ) : null;
};

export default Navbar;
