import React from 'react';
import './Home.css';
import jordans from '../images/jordans.jpg';
import Card from '../components/Card';
import heels from '../images/heels.jpg';
import nikeair from '../images/nikeair.jpg';
import sandals from '../images/sandals.jpg';

function Home() {
    return (
        <div className="home">
            <div className="home-img">
                <img src={jordans} alt="pair of red shoes"></img>
                <button>Discover more</button>
            </div>

            <hr />

            <div className="home-cards">
                <Card title="Browse our Heels" img={heels} alt="a pair of heels"/>
                <Card title="Browse our Trainers" img={nikeair} alt="a pair of trainers"/>
                <Card title="Browse our Sandals" img={sandals} alt="a pair of sandals"/>
            </div>

            <div className="promo">
                <div className="promo-title">HUGE BLACK FRIDAY SALE</div>
                <div className="promo-subtitle">Get up to 70% off your favourite products</div>
            </div>
        </div>
    )
}

export default Home;
