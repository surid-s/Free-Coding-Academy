import React from 'react';
import Choose from '../Choose/Choose';
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
            <Choose></Choose>
            <Contact></Contact>

        </div>
    );
};

export default Home;