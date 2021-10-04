import React, { useEffect, useState } from 'react';
import './Trainers.css';
import Trainer from '../../Components/Trainer/Trainer'

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    useEffect(() => {
        fetch("./trainerDB.json")
            .then(res => res.json())
            .then(data => setTrainers(data))
    }, []);
    return (
        <div>
            <div className="mb-3">
                <h3>Our Trainers </h3>
            </div>
            <div className="trainee-contain">

                {
                    trainers.map(trainer => <Trainer key={trainer.id} trainer={trainer}></Trainer>)
                }
            </div>
        </div>
    );
};

export default Trainers;