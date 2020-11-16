import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div>
            <nav className="header">
                
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://www.flaticon.com/svg/static/icons/svg/38/38888.svg"
                        alt=""
                    />
                </Link>

                <div className="header__search">
                    <input type="text" className="header__searchInput" />                    
                </div>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">TOP GAINER</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">TOP LOOSER</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">SOMETHING</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">SOMETHING</span>
                    </div>
                </Link>
                

            </nav>
        </div>
    )
}

export default Header
