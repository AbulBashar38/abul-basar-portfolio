import React from 'react';
import profileBG from '../../image/profileBG.jpg'
import Sidebar from '../Sidebar/Sidebar';
const About = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8" >
                    <div className='mt-5 pt-5 text-center'>
                        <img src={profileBG} style={{ height: '23rem' }} className='img-fluid' alt="" />
                    </div>


                    <div className='mt-5 ms-5'>
                        <h4 className=''>Abul basar & Web Development</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <p style={{ fontStyle: 'italic', color: '#bbb' }} className='my-4'>
                                    I am a Ful-struck web developer. I work with MERN stack but I always try to learn new things. I started to learn web Development from Programming Hero. From there I did 11 project assignment which are based on HTML,CSS,JavaScript,Bootstrap,Material ui, React-Bootstrap, Node.js,Express.js, Mongodb e.t.c
                                </p>
                                <button className="btn btn-outline-secondary fw-bold">LinkedIn</button>
                            </div>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>

            </div>

        </main>
    );
};

export default About;