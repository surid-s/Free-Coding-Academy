import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="courses-container">
            {/* <h1>Our Online Courses</h1> */}
            {
                courses.map(course => <Course course={course}></Course>)
            }
        </div>
    );
};

export default Courses;