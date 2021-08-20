import React from 'react';
import NavHeader from '../Navbar/NavHeader';
import Sidebar from '../Sidebar/Sidebar';
import Hero from './Hero';
import './Home.css'
const Home = () => {
    
    return (
        <main className='container-fluid'>
            <div className="navHeader d-none">
                <NavHeader></NavHeader>
            </div>
            <div className="sidebar-main">
                <Sidebar></Sidebar>
            </div>
            <div className="main-part">
                <div data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <Hero></Hero>
                </div>
            </div>
        </main>
    );
};

export default Home;