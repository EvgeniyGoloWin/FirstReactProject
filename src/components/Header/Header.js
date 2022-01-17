import React from "react";
import './Header.css'

function Header() {
    return(
        <header className={"header"}>
        <div className="header_container">
            <a href="" className="header__logo">
                Thrivetalk
            </a>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <a href="" className="menu__link">Home</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">About</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">Services</a>
                    </li>
                    <li className="menu__item">
                        <a href="" className="menu__link">Blog</a>
                    </li>
                </ul>
            </nav>
            <button className="button" type="button">CONTACT US</button>
        </div>
        </header>
    )
}
export default Header;