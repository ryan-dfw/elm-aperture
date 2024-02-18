import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav
            id="navbar"
            className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top"
        >
            <div className="container">
                <a href="index.html" className="navbar-brand">Elm Aperture</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#home" className="nav-link smallify">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="./calendar.html" className="nav-link smallify">Calendar</a>
                        </li>
                        <li className="nav-item">
                            <a href="./gallery.html" className="nav-link smallify">Gallery</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle smallify"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Our Photographers
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li><a className="dropdown-item" href="./rain.html">Rain</a></li>
                                <li>
                                    <a className="dropdown-item" href="./meraki.html"
                                    >Meraki</a
                                    >
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;