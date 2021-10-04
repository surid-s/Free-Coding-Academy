import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const element = <FontAwesomeIcon icon={faSearch} />
    return (
        <div className="header-container">
            <div className="nav">
                <Link to="/home">Free Coding Academy</Link>
            </div>
            <div className="header-section">
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/allCourse">Our Courses</Link>
                <Link to="/contact">Contact</Link>
                <Button variant="success" placeholder="search here">{element} Search</Button>
            </div>
        </div>
    );
};

export default Header;