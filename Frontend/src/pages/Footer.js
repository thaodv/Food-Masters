import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark pt-4 pb-3 px-3 text-white d-flex justify-content-between align-items-start">
            <p className="mt-2">&copy; 2021, Food Masters </p>
            <Link to="/business/login" className="btn btn-success ">Food Masters For Business</Link>
            <p className="mt-2">Design & Developed By: Swapnil Aanam</p>
        </div>
    )
}

export default Footer
