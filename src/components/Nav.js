import React, {useState} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

    const [click, setClick] = useState(false);

    const navStyle = {
        color: 'black'
    };

    const logoStyle = {
        textDecoration: 'none'
    };

    return (
        <div className="nav">
            
            <div className="nav-bottom">
                <Link style={logoStyle} to="/">
                    <div className="nav-logo">
                        <span className="golden">GOLDEN</span>
                        <span className="shoes">SHOE</span>
                    </div>
                </Link>

                <div className="nav-category">
                    <i class="fas fa-search"><input type="search" placeholder="Search for a product..." ></input></i>
                </div>

                <div className="nav-basket-user">
                    <Link style={navStyle} to='/login'><i class="far fa-user fa-lg"></i></Link>
                    <Link style={navStyle}><i class="fas fa-shopping-basket fa-lg"></i></Link>
                    <Link style={navStyle}><i class="fas fa-bars fa-lg"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;
