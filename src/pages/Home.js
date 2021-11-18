import React from 'react';
import './Home.css';
import jordans from '../images/jordans.jpg';


function Home() {
    return (
        <div className="home">
            <div className="home-img">
                <img src={jordans} alt="pair of red shoes"></img>
                <button>Discover more</button>
            </div>

            <hr />

            
        </div>
    )
}

export default Home;
