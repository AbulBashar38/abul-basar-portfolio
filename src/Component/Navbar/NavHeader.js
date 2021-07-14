import { faBriefcase, faEnvelope, faHome, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand fw-bold">Abul Basar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-1">
                                <Link to='/home' className="nav-link active" aria-current="page"><FontAwesomeIcon icon={faHome} /></Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link to='/about' className="nav-link active"><FontAwesomeIcon icon={faUserTie} /></Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link to='/portfolio' className="nav-link active"><FontAwesomeIcon icon={faBriefcase} /></Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link to='/contact' className="nav-link active"><FontAwesomeIcon icon={faEnvelope} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavHeader;