import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <section className='sidebar d-flex justify-content-center align-items-center'>
            <div>
                <h3 className='mb-4'>Abul Basar</h3>
                <ul className='list-unstyled mb-5'>
                    <li className='my-2'>
                        <Link style={{color:'#bbb'}} className='text-decoration-none'>Home</Link>
                    </li>
                    <li className='my-2'>
                        <Link style={{color:'#bbb'}} className='text-decoration-none '>About</Link>
                    </li>
                    <li className='my-2'>
                        <Link style={{color:'#bbb'}} className='text-decoration-none '>Portfolio</Link>
                    </li>
                    <li className='my-2'>
                        <Link style={{color:'#bbb'}} className='text-decoration-none '>Blogs</Link>
                    </li>
                    <li className='my-2'>
                        <Link style={{color:'#bbb'}} className='text-decoration-none '>Contract</Link>
                    </li>
                </ul>
                <div>
                    <p>&copy; 2021 by Abul Basar</p>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;