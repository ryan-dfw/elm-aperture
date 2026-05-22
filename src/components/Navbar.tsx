import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';
import { useContextValue } from '../contexts/Context';
import { routeTitles } from '../content/routeTitles';

const PortraitLinks = {
    Headshots: 'Headshot',
    Professional: 'Professional',
    Lifestyle: 'Lifestyle',
};

const RealEstateLinks = {
    Hotel: 'Hotel',
    Motel: 'Motel',
    Commercial: 'Commercial',
    Residential: 'Residential',
};

const EventLinks = {
    Weddings: 'Wedding',
    Events: 'Events',
};

const Photographers = {
    Rain: 'Rain',
    Alejandro: 'Alejandro',
    Maivy: 'Maivy'
};

const Navbar: React.FC = () => {
    const { shouldShowNav } = useContextValue();
    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(true);
    const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

    const currentTitle = routeTitles[
        location.pathname as keyof typeof routeTitles
        ];

    useEffect(() => {
        const handleResize = () => {
            setShowNavbar(window.innerWidth >= 600);
            setIsDesktop(window.innerWidth >= 992);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleToggleNavbar = () => {
        setIsNavbarCollapsed(!isNavbarCollapsed);
    };

    const handleTopLevelMenuItemClick = () => {
        if (isNavbarCollapsed) {
            handleToggleNavbar();
        }
    };

    // compiler silencer; never remove
    if (showNavbar === !showNavbar) {
        console.log(showNavbar, isDesktop);
    }

    return window.innerWidth < 600 || shouldShowNav ? (
        <div>
            <BootstrapNavbar
                id="navbar"
                expand="lg"
                bg="dark"
                variant="dark"
                className="py-1 fixed-top"
                expanded={isNavbarCollapsed}
            >
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Elm Aperture
                    </Link>

                    {isDesktop && currentTitle && (
                        <div className="navbar-page-title">
                            {currentTitle}
                        </div>
                    )}

                    <BootstrapNavbar.Toggle aria-controls="navmenu" onClick={handleToggleNavbar} />
                    <BootstrapNavbar.Collapse id="navmenu">
                        <Nav className="ms-auto" data-bs-theme="dark">
                            <NavDropdown title="Real Estate" id="realEstateDropdown">
                                {Object.values(RealEstateLinks).map((category) => (
                                    <NavDropdown.Item
                                        key={category}
                                        as={Link}
                                        to={`/${category.toLowerCase()}`}
                                        onClick={handleTopLevelMenuItemClick}
                                    >
                                        {category}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="Events" id="eventsDropdown">
                                {Object.values(EventLinks).map((category) => (
                                    <NavDropdown.Item
                                        key={category}
                                        as={Link}
                                        to={`/${category.toLowerCase()}`}
                                        onClick={handleTopLevelMenuItemClick}
                                    >
                                        {category}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavDropdown title="Portraits" id="portraitsDropdown">
                                {Object.values(PortraitLinks).map((category) => (
                                    <NavDropdown.Item
                                        key={category}
                                        as={Link}
                                        to={`/${category.toLowerCase()}`}
                                        onClick={handleTopLevelMenuItemClick}
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
                                        onClick={handleTopLevelMenuItemClick}
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
