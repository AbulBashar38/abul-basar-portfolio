import React from 'react';
import profilePic from '../../image/forWebProfile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Hero = () => {
    return (
        <main>
            <div className="row">
                <div className="col-md-5 col-sm-5">
                    <img style={{ marginTop: '20px' }} src={profilePic} alt="" className="img-fluid" />
                </div>
                <div className="col-md-7 col-sm-7 short-description">
                    <h1 className='fw-bold'>Hey, My name is <br /> ABUL BASAR</h1>
                    <p style={{ fontStyle: 'italic', color: '#bbb' }} className='my-4'>I am a Web Developer. Basically I love to work in Front-end but I have knowledge about Node.js and Mongodb. I work in MERN stuck actually and developed 4 Project with the MERN stuck.</p>
                    <div>
                        <a href='https://www.facebook.com/abulbashar38/' target='_blank' rel="noopener noreferrer" className='text-decoration-none text-white me-3 fs-4'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href='https://github.com/AbulBashar38' target='_blank' rel="noopener noreferrer" className='text-decoration-none text-white me-3 fs-4'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href='https://www.linkedin.com/in/abulbashar5403/' target='_blank' rel="noopener noreferrer" className='text-decoration-none text-white me-3 fs-4'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href='https://drive.google.com/file/d/1TCpY0LkYDTEJvx9tCZKqQbhwwuW5PHJt/view?usp=sharing' target='_blank' rel="noopener noreferrer" className="btn btn-outline-secondary fw-bold">MY RESUME</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;