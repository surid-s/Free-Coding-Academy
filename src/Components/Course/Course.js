
import React from 'react';
import { Button } from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    const { title, description, rating, fee, img } = props.course;
    // console.log(props)
    return (
        <div className="course-container">
            <div><img src={img} alt="" /></div>
            <div>
                <h3>{title}</h3>
                <h5>{description}</h5>
                <h5>${fee}</h5>
                <small>{rating}</small>
                <br />
                <Button className="mt-2" variant="success">Enroll Now</Button>
            </div>

        </div>
    );
};

export default Course;