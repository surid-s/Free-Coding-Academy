import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCertificate, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import './Choose.css'

const Choose = () => {
    const element = <FontAwesomeIcon icon={faBook} />
    const secondElement = <FontAwesomeIcon icon={faGraduationCap} />
    const thirdElement = <FontAwesomeIcon icon={faCertificate} />
    return (
        <div className="choose-div">
            <div>
                <h1 className="title">Why Choose Us?</h1>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi illum repudiandae, deleniti est dicta tempore accusantium ducimus fugiat quaerat.</p>
                <h1>{element} Best Learning System</h1>
                <h1>{secondElement} Learning Management</h1>
                <h1>{thirdElement} Online Certification</h1>
            </div>
            <div>
                <img src="https://wallpapercave.com/wp/wp3191283.jpg" alt="" />
            </div>
        </div>
    );
};

export default Choose;