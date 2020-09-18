import React, { useState } from 'react';

const Button = ({ text, sizerList, updateFunction, data }) => {
    const sizerListIds = sizerList.map(({ ...item }) => item.id);
    const isItemUsed = false; //sizerListIds.includes(data.id);

    const clickHandler = (data) => {
        updateFunction(sizerList => [...sizerList, data]);
    }

    return (
        <button className={`ButtonAdd ${isItemUsed ? 'disabled' : ''}`} 
        disabled={isItemUsed ? 'disabled' : undefined} 
        onClick={() => clickHandler(data)}>
            {text}
        </button>
    );
};

const SizerPicker = ({ sizerList, sizerData, updateFunction }) => {
    return (
        <div className="picker">
            {sizerData.map((item) => {
                const itemId = item.id;
                const itemName = item.name;

                if (!item.default) {
                    return <Button key={itemId} text={itemName} sizerList={sizerList} updateFunction={updateFunction} data={item}/>
                }
            })}
        </div>
    );
}

export default SizerPicker;
