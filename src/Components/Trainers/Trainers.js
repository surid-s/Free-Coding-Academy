import React, { useEffect, useState } from 'react';
import './Trainers.css';
import Trainer from '../../Components/Trainer/Trainer'

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch("./fakedb.json")
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, []);
    return (
        <div>
            <div>
                <h3>Our Trainers </h3>
            </div>
            {
                trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer}></Trainer>)
            }
        </div>
    );
};

export default Trainers;