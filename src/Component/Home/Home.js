import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Hero from './Hero';
import './Home.css'
const Home = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 hero-part d-flex align-items-center">
                    <Hero></Hero>
                </div>
            </div>
        </main>
    );
}; 

export default Home;