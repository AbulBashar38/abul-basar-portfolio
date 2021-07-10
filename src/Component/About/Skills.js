import React from 'react';

const Skills = () => {
    return (
        <section className='ms-5 mt-4'>
            <h4>My Skills</h4>
            <ul>
                <li className='mt-4'><h5>Expertise:</h5></li>
                <div style={{width:'20rem'}}>
                    <h5 className='d-inline'>
                        <span className='badge bg-secondary'>React JS</span>
                    </h5>
                    <h5 className='d-inline'><span className='badge bg-secondary'>React Router</span></h5>
                    <h5 className='d-inline'><span className='badge bg-secondary'>React Bootstrap</span></h5>

                    <h5 className='d-inline'><span className='badge bg-secondary me-2'>Material UI</span></h5>
                    <h5 className='d-inline'><span className='badge bg-secondary mx-2'>HTML5</span></h5>
                    <h5 className='d-inline'><span className='badge bg-secondary mx-2'>CSS3</span></h5>
                    <h5 className='d-inline'><span className='badge bg-secondary mx-2'>Bootstrap</span></h5>

                    <h5 className='d-inline'><span className='badge bg-secondary me-2'>JavaScript ES6</span></h5>
                </div>

                <li className='my-4'><h5>Comfortable:</h5></li>
                <h5 className='d-inline'><span className='badge bg-secondary me-2 my-2'>Node</span></h5>
                <h5 className='d-inline'><span className='badge bg-secondary'>Mongodb</span></h5>
                <li className='my-4'><h5>Extra Skills:</h5></li>
                <h5 className='d-inline'><span className='badge bg-secondary me-2 my-2'>Adobe Illustrator</span></h5>
                <h5 className='d-inline'><span className='badge bg-secondary'>Adobe Photoshop</span></h5>

                <h5 className='d-inline'><span className='badge bg-secondary me-2'>Adobe Premier Pro</span></h5>
                <h5 className='d-inline'><span className='badge bg-secondary'>Adobe After Effects</span></h5>
                <li className='my-4'>Operating Systems:</li>
                <h5 className='d-inline'><span className='badge bg-secondary me-2 my-2'>Windows 10</span></h5>
                <li className='my-4'>Tools & Softwares:</li>
                <h5 className='d-inline'><span className='badge bg-secondary me-2 my-2'>Windows 10</span></h5>
                <h5 className='d-inline'><span className='badge bg-secondary'>Adobe Photoshop</span></h5>
            </ul>
        </section>
    );
};

export default Skills;