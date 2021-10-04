import React, { useEffect, useState } from 'react';
import Single from '../Single/Single';

const MyCourse = () => {
    const [allCourses, setAllCourses] = useState([])
    useEffect(() => {

        fetch('./allCourseDB.json')
            .then(res => res.json())
            .then(data => setAllCourses(data))

    }, [])
    return (
        <div className="courses-container">
            {allCourses.map(scourse => <Single scourse={scourse}></Single>)}
        </div>
    );
};

export default MyCourse;