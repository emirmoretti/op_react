import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = ({ name }) => {

    const [age, setAge] = useState(25);

    const birthDay = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h1>Hola {name} desde functional component</h1>
            <h2>
                tu edad es {age}
            </h2>
            <div>
                <button onClick={birthDay}>cumplir años</button>
            </div>
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
