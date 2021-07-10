import React from 'react';
import profileBG from '../../image/profileBG.jpg'
import Sidebar from '../Sidebar/Sidebar';
import Introduction from './Introduction';
import Skills from './Skills';
const About = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8" >
                    <div className='mt-5 pt-3 text-center'>
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