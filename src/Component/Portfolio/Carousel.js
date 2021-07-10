import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const Carousel = (prams) => {
    const {projectName,image1,image2,image3,description,liveLink,githubLink,features,technology}= prams.data
    return (
        <section className='mb-5'>
            <h2 className='fw-bold text-center'>{projectName}</h2>
            <div className='mt-4 d-flex justify-content-center'>
                <div style={{ border: '6px solid black', borderRadius: '14px', boxShadow: '2px 5px 18px white' }} id="carouselExampleIndicators" className="carousel slide w-75" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} className="d-block w-100 rounded-3" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100 rounded-3" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100 rounded-3" alt="..." />
                        </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next text-black" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='mt-4'>
                <p className='fst-italic text-white-50 fw-bolder'> {description} </p>
                <div className='text-center'>
                <button className="btn btn-outline-secondary fw-bold m-2"><FontAwesomeIcon className='me-2 fs-5 text-white' icon={faGlobe} />LIVE</button>
                <button className="btn btn-outline-secondary fw-bold m-2"><FontAwesomeIcon className='me-2 fs-5 text-white' icon={faGithub} />GITHUB</button>
                </div>
                <h3>Features</h3>
                <ul className='text-white-50 fst-italic fw-bolder'>
                    {
                        features.map(feature=><li>{feature}</li>)  
                    }
                </ul>
                <h3>Technology</h3>
                <div style={{ width: '30rem' }}>
                    {
                        technology.map(tech=><h5 className='d-inline'><span className='badge bg-secondary  my-1 mx-2'>{tech}</span></h5>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Carousel;