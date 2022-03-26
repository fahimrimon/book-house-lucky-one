import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='question-part'>
            <hr />
            <h2>Q-1: Defference between State and Props.</h2>
            <div className='first-ans'>
                <ol type='i'>
                    <li>State are mutable</li>
                    <li>States can be modified using setState()</li>
                    <li>States can be changes asynchronous</li>
                    <li>States are passed inside a component</li>
                </ol>
                <ol type='i'>
                    <li>Props are immutable</li>
                    <li>Props can not be modified</li>
                    <li>Props are read only</li>
                    <li>Props are passed outside a component</li>
                </ol>
            </div>
            <hr />
        </div>
    );
};

export default Question;