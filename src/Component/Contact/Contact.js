import React from 'react';
import NavHeader from '../Navbar/NavHeader';
import Sidebar from '../Sidebar/Sidebar';
import './Contact.css'
const Contact = () => {
    return (
        <main>
            <div className="navHeader d-none">
                <NavHeader></NavHeader>
            </div>
            <div className="sidebar-main">
                <Sidebar></Sidebar>
            </div>
            <div className="main-part mb-3">
                <div data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
                    <h2 className='text-center fw-bold mt-5'>Contact with me</h2>
                    <div className='d-flex justify-content-center mt-4'>
                        <form className='contact-form'>
                            <div className="mb-3">
                                <label htmlFor="nameInput" className="form-label">Name</label>
                                <input type='text' className="form-control" id="nameInput" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descriptionInput" className="form-label">Description</label>
                                <textarea type="email" className="form-control" id="descriptionInput" aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-outline-secondary fw-bold">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;