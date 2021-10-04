import React from 'react';
import { Link } from 'react-router-dom';
import './FirstContent.css'

const FirstContent = () => {
    return (
        <div>
            <div className="home-content-one">
                <h1> <span className="text-color">Education</span> and Training Organization.</h1>
                <p>We proviet best education system for you amet mauris lobortis mauris inceptos eget. Urna imperdiet.</p>
                <Link to="/contact">Contact Us</Link> <Link to="/courses">Our Courses</Link>
            </div>
        </div>
    );
};

export default FirstContent;