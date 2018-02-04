import React from 'react';

const LanguageWidget = () => (
    <li className="dropdown language-switch">
        <a className="dropdown-toggle" data-toggle="dropdown">
            <img src= {`${process.env.PUBLIC_URL}assets/images/flags/gb.png`} className="position-left" alt="" />
            English <span className="caret"/>
        </a>
        <ul className="dropdown-menu">
            <li><a className="deutsch"><img src={`${process.env.PUBLIC_URL}assets/images/flags/de.png`} alt="" /> Deutsch</a></li>
            <li><a className="english"><img src={`${process.env.PUBLIC_URL}assets/images/flags/gb.png`} alt="" /> English</a></li>
        </ul>
    </li>
);

export default LanguageWidget;