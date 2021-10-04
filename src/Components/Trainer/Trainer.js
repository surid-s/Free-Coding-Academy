import React from 'react';
import './Trainer.css';

const Trainer = (props) => {
    // console.log(props)
    const { iName, img } = props.trainer;
    return (
        <div>

            <div>
                <h3>{iName}</h3>
                {img}
            </div>
        </div>

    );
};

export default Trainer;