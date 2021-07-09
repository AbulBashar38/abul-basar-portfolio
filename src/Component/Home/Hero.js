import React from 'react';
import profilePic from '../../image/forWebProfile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Hero = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-5">
                    <img style={{marginTop:'20px'}} src={profilePic} alt="" className="img-fluid" />
                </div>
                <div className="col-md-7">
                    <h1 className='fw-bold'>Hey, My name is <br /> ABUL BASAR</h1>
                    <p style={{ fontStyle: 'italic', color: '#bbb' }} className='my-4'>I am a Web Developer. Basically I love to work in Front-end but I have knowledge about Node.js and Mongodb. I work in MERN stuck actually and developed 4 Project with the MERN stuck.</p>
                    <div>
                        <Link className='text-decoration-none text-white me-3 fs-4'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link className='text-decoration-none text-white me-3 fs-4'>
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>
                        <Link className='text-decoration-none text-white me-3 fs-4'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                        <button className="btn btn-outline-secondary fw-bold">MY RESUME</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;