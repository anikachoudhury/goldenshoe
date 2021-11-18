import React, {useState} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu);
    }

    let open;
    if(menu) {
        open = 
        <div className="menu">
            <i onClick={showMenu}class="fas fa-times fa-2x"></i>
            <h3>Choose your category</h3>
            
            <li>Women</li>
            <hr/>
            <li>Men</li>
            <hr/>
            <li>Kids</li>
            <hr/>
            <li>Trainers</li>
            <hr/>
            <li>Sandals</li>
            <hr/>
            <li>Casual</li>
            <hr/>
            <li>Smart</li>
            <hr/>
            <li>Heels</li>
            <hr/>
            <li>Boots</li>
            <hr/>
            <li>Slippers</li>
            <hr/>
        </div>
    }

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
                    <Link style={navStyle}><i onClick={showMenu} class="fas fa-bars fa-lg"></i></Link>
                </div>
            </div>
            { open }
        </div>
    )
}

export default Nav;
