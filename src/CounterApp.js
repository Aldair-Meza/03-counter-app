import React, {useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value = 10}) => {


const [counter, setCounter] = useState(value);




    //handleAdd

    const handleAdd = () => {
        //setCounter (counter +1)
        setCounter((c) => c + 1);
    }

    const reset = () => {
        setCounter (value);
    }

    const menos = () =>{

        setCounter (counter -1)
    }
    

    return (

        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={menos}>-1</button>
        </>

    );


}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
}


export default CounterApp;