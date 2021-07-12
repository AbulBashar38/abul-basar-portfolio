import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Contact = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h2 className='text-center fw-bold mt-5'>Contact with me</h2>
                    <div className='d-flex justify-content-center mt-4'>
                        <form style={{ width: '35rem' }}>
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
        </div>
    );
};

export default Contact;