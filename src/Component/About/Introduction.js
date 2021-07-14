import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Introduction = () => {
    return (
        <section className='container-fluid'>
            <div className='mt-5'>
                <h4 className=''>Abul basar & Web Development</h4>
                <div className="row mt-3">
                    <div className="col-md-6 col-sm-6 col-12">
                        <small style={{ color: '#bbb' }} className='my-4 fst-italic'>
                            I am a Ful-struck web developer. I work with MERN stack but I always try to learn new things. I started to learn web Development from Programming Hero. From there I did 11 project assignment which are based on HTML,CSS,JavaScript, React.js,Bootstrap,Material ui, React-Bootstrap, Node.js,Express.js, Mongodb e.t.c
                        </small>
                        <br />
                        <a href='https://www.linkedin.com/in/abulbashar5403/' target='_blank' rel="noopener noreferrer" className="btn btn-outline-secondary fw-bold mt-3 mb-4"> <FontAwesomeIcon className='me-2 fs-5 text-white' icon={faLinkedin} />LinkedIn</a>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <p>Birthday: <span style={{ color: '#bbb' }} className='fst-italic ms-2'> 28 January 2003</span></p>
                        <p>Age:<span style={{ color: '#bbb' }} className='fst-italic ms-2'>19</span></p>
                        <p>Address:<span style={{ color: '#bbb' }} className='fst-italic ms-2'>Kalindi, Keranigonj, Dhaka, Bangladesh</span></p>
                        <p>Study:<span style={{ color: '#bbb' }} className='fst-italic ms-2'>Programming Hero, Shyamoli Ideal Polytechnic Institute</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;