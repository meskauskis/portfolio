import React, { useState } from 'react';

const Button = ({ text, updateFunction, data }) => {
    const clickHandler = (data) => {
        updateFunction(sizerList => [...sizerList, data]);
    }

    return (
        <button className="ButtonAdd" onClick={() => clickHandler(data)}>
            {text}
        </button>
    );
};

const SizerPicker = ({ sizerList, updateFunction }) => {
    return (
        <>
            <div className="picker">
                <Button text="Eiffel Tower" updateFunction={updateFunction} data={ {'id': 'paris', 'height': 324} }/>
                <Button text="Empire State Building" updateFunction={updateFunction} data={ {'id': 'empire', 'height': 443} }/>
                <Button text="Cat" updateFunction={updateFunction} data={ {'id': 'cat', 'height': 0.26} }/>
                <Button text="Godzilla" updateFunction={updateFunction} data={ {'id': 'godzilla', 'height': 122} }/>
            </div>
        </>
    );
}

export default SizerPicker;
