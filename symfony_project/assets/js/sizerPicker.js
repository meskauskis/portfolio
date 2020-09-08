import React, { useState } from 'react';

const Button = ({ text, sizerList, updateFunction, data }) => {
    const clickHandler = (data) => {
        updateFunction(sizerList => [...sizerList, data]);
    }
    const sizerListIds = sizerList.map(({ ...item }) => item.id);
    const isItemUsed = sizerListIds.includes(data.id);

    return (
        <button className={`ButtonAdd ${isItemUsed ? 'disabled' : ''}`} disabled={isItemUsed ? 'disabled' : undefined} onClick={() => clickHandler(data)}>
            {text}
        </button>
    );
};

const SizerPicker = ({ sizerList, updateFunction }) => {
    return (
        <>
            <div className="picker">
                <Button text="Eiffel Tower" sizerList={sizerList} updateFunction={updateFunction} data={ {'id': 'paris', 'height': 324} }/>
                <Button text="Empire State Building" sizerList={sizerList} updateFunction={updateFunction} data={ {'id': 'empire', 'height': 443} }/>
                <Button text="Cat" disabled={true} sizerList={sizerList} updateFunction={updateFunction} data={ {'id': 'cat', 'height': 0.26} }/>
                <Button text="Godzilla" disabled={true} sizerList={sizerList} updateFunction={updateFunction} data={ {'id': 'godzilla', 'height': 122} }/>
            </div>
        </>
    );
}

export default SizerPicker;
