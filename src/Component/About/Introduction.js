import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Introduction = () => {
    return (
        <section>
            <div className='mt-5 ms-5'>
                <h4 className=''>Abul basar & Web Development</h4>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <small style={{ fontStyle: 'italic', color: '#bbb' }} className='my-4'>
                            I am a Ful-struck web developer. I work with MERN stack but I always try to learn new things. I started to learn web Development from Programming Hero. From there I did 11 project assignment which are based on HTML,CSS,JavaScript, React.js,Bootstrap,Material ui, React-Bootstrap, Node.js,Express.js, Mongodb e.t.c
                        </small>
                        <br />
                        <button className="btn btn-outline-secondary fw-bold mt-3"> <FontAwesomeIcon className='me-2 fs-5 text-white' icon={faLinkedin} />LinkedIn</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <p>Birthday:</p>
                                <p>Age:</p>
                                <p>Address:</p>
                                <p className='mt-5'>Study:</p>
                            </div>
                            <div className="col-md-9">
                                <p className='fst-italic text-secondary'>28 January 2003</p>
                                <p className='fst-italic text-secondary'>19</p>
                                <p className='fst-italic text-secondary'>Kalindi, Keranigonj,<br />Dhaka, Bangladesh</p>
                                <p className='fst-italic text-secondary'>Programming Hero,<br />Shyamoli Ideal Polytechnic Institute</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;