import React from 'react';

const NavbarLink = () => (
    <ul className="nav navbar-nav">
        <li className="active"><a>Link</a></li>
        <li><a>Link</a></li>
        <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"/></a>
            <ul className="dropdown-menu">
                <li><a>Action</a></li>
                <li><a>Another action</a></li>
                <li><a>Something else here</a></li>
            </ul>
        </li>
    </ul>
);

export default NavbarLink;