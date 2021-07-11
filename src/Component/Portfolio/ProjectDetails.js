import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
SwiperCore.use([Autoplay, Pagination, Navigation]);
const ProjectDetails = (prams) => {
    const { projectName, image1, image2, image3, description, liveLink, githubLink, features, technology } = prams.data

    return (
        <section className='mb-5'>
            <h2 className='fw-bold text-center'>{projectName}</h2>
            <div className='mt-4 d-flex justify-content-center'>
                <div style={{ border: '6px solid black', borderRadius: '14px', boxShadow: '2px 5px 18px white' }} className='w-75'>
                    <Swiper slidesPerView={1} spaceBetween={30} loop={true} autoplay={{delay:5000}} pagination={{
                        "clickable": true
                    }} navigation={true} className="mySwiper">
                        <SwiperSlide><img src={image1} alt="" className="img-fluid rounded-3" /></SwiperSlide>
                        <SwiperSlide><img src={image2} alt="" className="img-fluid rounded-3" /></SwiperSlide>
                        <SwiperSlide><img src={image3} alt="" className="img-fluid rounded-3" /></SwiperSlide>
                    </Swiper>
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
                        features.map(feature => <li>{feature}</li>)
                    }
                </ul>
                <h3>Technology</h3>
                <div style={{ width: '30rem' }}>
                    {
                        technology.map(tech => <h5 className='d-inline'><span className='badge bg-secondary  my-1 mx-2'>{tech}</span></h5>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;