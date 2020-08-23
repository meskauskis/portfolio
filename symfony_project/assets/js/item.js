import React, { useState } from 'react';

const App = () => {
    const [greeting, setGreeting] = useState(
        'Hello Component:'
    );

    const handleChange = event => setGreeting(event.target.value);

    return (
        <>
            <Headline headline={greeting} />
     
            <Input value={greeting} onChangeInput={handleChange}>
                Set The Greeting:
            </Input>
        </>
    );
};

const Headline = ({ headline }) => {
    return(
        <h4>{headline}</h4>
    )
};

const Input = ({ value, onChangeInput, children }) => (
    <label>
        {children}
        <input type="text" value={value} onChange={onChangeInput} />
    </label>
);

export default App;
