import React from 'react';
import { useMediaQuery } from 'react-responsive';
import NavHeader from '../Navbar/NavHeader';
import Sidebar from '../Sidebar/Sidebar';
import Hero from './Hero';
import './Home.css'
const Home = () => {
    const isMedium = useMediaQuery({query: '(max-width: 1080px)'});
    const isBig = useMediaQuery({query: '(min-width: 1080px)'});
    if (isMedium) {
        const heroPart = document.getElementById('hero-part');
        heroPart.classList.remove('col-md-8')
        heroPart.classList.add('col-md-12')
    }else{
        const heroPart = document.getElementById('hero-part');
        heroPart.classList.remove('col-md-12')
        heroPart.classList.add('col-md-8')
    }
    return (
        <main className='container-fluid'>
            <div className="navHeader d-none">
                <NavHeader></NavHeader>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="sidebar-main">
                        <Sidebar></Sidebar>
                    </div>
                </div>
                <div id='hero-part' className="col-md-8 col-sm-12 col- hero-part d-flex align-items-center">
                    <Hero></Hero>
                </div>
            </div>
        </main>
    );
};

export default Home;