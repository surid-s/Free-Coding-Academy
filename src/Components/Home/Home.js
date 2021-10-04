import React from 'react';
import Courses from '../Courses/Courses';
import FirstContent from '../FirstContent/FirstContent';
// import Trainer from '../Trainers/Trainer';
import Trainers from '../Trainers/Trainers';
import './Home.css'

const Home = () => {
    return (
        <div>
            <FirstContent></FirstContent>
            <Courses></Courses>
            <Trainers></Trainers>
        </div>
    );
};

export default Home;