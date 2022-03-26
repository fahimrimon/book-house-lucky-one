import React from 'react';
import './Questiontwo.css';
const Questiontwo = () => {
    return (
        <div className='questiontwo-part'>
            <h2>Q-2: How useState works in react?</h2>
            <p>We know the useState() is a Hook and  that is allows to have state variables in functional components. we know that react has two types components one is class components and the other is functional components. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. <br /> <span className='fw-bold'>useState declaration syntex:</span>  <br /> const [state, setState] = useState(initialstate) <br /><span className='fw-bold'>Importing: </span> To use useState you need to import useState from react as shown below: <br /> import React,  usestate from "react" <br /> The useState function is a built in hook that can be imported from the react package. It allows you to add state to your functional components. Using the useState hook inside a function component, you can create a piece of state without switching to class components. <br /> <span className='fw-bold'>5 use cases of the useState ReactJS hook: </span> <br /> 1. State management <br /> 2. Conditional rendering <br />3. Toggle flags (true/false) <br />4. Counter <br />5. Get API data and store it in state. </p>
        </div>
    );
};

export default Questiontwo;