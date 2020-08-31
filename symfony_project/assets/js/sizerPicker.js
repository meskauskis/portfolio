import React, { useState } from 'react';

const Button = ({ text, clickHandler, data }) => {
    return (
        <button className="ButtonAdd" onClick={() => clickHandler(data)}>
            {text}
        </button>
    )
};

const SizerPicker = ({ sizerList, updateFunction }) => {
    const clickHandler = (data) => {
        console.log(name);
        updateFunction(sizerList => [...sizerList, data]);
    }

    return (
        <>
            <div className="picker">
                <Button text="Tower" clickHandler={clickHandler} data={ {'name': 'paris', 'height': 1000} }/>
                <Button text="Cat" clickHandler={clickHandler} data={ {'name': 'cat', 'height': 20} }/>
                <Button text="Godzilla" clickHandler={clickHandler} data={ {'name': 'godzilla', 'height': 1300} }/>
            </div>
        </>
    );
}

export default SizerPicker;
