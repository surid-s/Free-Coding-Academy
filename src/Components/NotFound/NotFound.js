import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry, The page you are looking for is not available.</h1>
            <img src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="" />
            <br />
            <Link to="/home">Home</Link>
        </div>
    );
};

export default NotFound;