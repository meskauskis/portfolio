import React, { useState } from 'react';

const Headline = ({ name }) => {
    if (!name) {
        return null
    }
    return (
        <h4>Hello, {name}</h4>
    )
};

const Input = ({ value, onChangeInput, children }) => (
    <label>
        {children}
        <input type="text" value={value} onChange={onChangeInput} placeholder="Enter Your Name"/>
    </label>
);

const NameTeller = () => {
    const [greeting, setGreeting] = useState('');

    const handleChange = (event) => setGreeting(event.target.value);

    return (
        <>
            <Input value={greeting} onChangeInput={handleChange}>
                What is your name?
            </Input>

            <Headline name={greeting} />     
        </>
    );
};

export default NameTeller;
