import React from 'react';
import { useMediaQuery } from 'react-responsive';
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
                <Hero></Hero>
            </div>
        </main>
    );
};

export default Home;