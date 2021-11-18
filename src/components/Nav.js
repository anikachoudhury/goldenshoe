import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <div className="nav-top">
                <li>Homepage</li>
                <li>About Us</li>
                <li>Contact</li>
            </div>
            
            <div className="nav-bottom">
                <div className="nav-logo">
                    <span className="golden">GOLDEN</span>
                    <span className="shoes">SHOE</span>
                </div>

                <div className="nav-category">
                    <i class="fas fa-search"><input type="search" placeholder="Search for a product..." ></input></i>
                </div>

                <div className="nav-basket-user">
                    <i class="far fa-user fa-lg"></i>
                    <i class="fas fa-shopping-basket fa-lg"></i>
                </div>
            </div>
        </div>
    )
}

export default Nav;
