import React from 'react';
import profileBG from '../../image/profileBG.jpg'
import NavHeader from '../Navbar/NavHeader';
import Sidebar from '../Sidebar/Sidebar';
import Introduction from './Introduction';
import Skills from './Skills';
import './About.css'
const About = () => {
    return (
        <main className='container-fluid'>
            <div className="navHeader d-none">
                <NavHeader></NavHeader>
            </div>

            <div className="sidebar-main">
                <Sidebar></Sidebar>
            </div>

            <div className="main-part" style={{ height: 'auto' }}>
                <div>
                    <div className='mt-5 pt-3 w-100 d-flex justify-content-center align-items-center about-banner'>
                        <img src={profileBG} style={{ height: '23rem' }} className='img-fluid' alt="" />
                    </div>
                    <Introduction></Introduction>
                    <Skills></Skills>
                </div>
            </div>


        </main>
    );
};

export default About;