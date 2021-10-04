import React from 'react';
import Contact from '../Contact/Contact';
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
            <Contact></Contact>
        </div>
    );
};

export default Home;