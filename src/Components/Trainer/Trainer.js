import React from 'react';
import './Trainer.css';

const Trainer = (props) => {
    console.log(props)
    const { iName, iImg } = props.trainer;
    return (
        <div className="trainers">
            <div>
                <img src={iImg} alt="" />
            </div>
            <div>
                <h3>{iName}</h3>
            </div>
        </div>

    );
};

export default Trainer;