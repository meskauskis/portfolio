import React, { useState } from 'react';

const SizerItem = ({ itemId, itemSize, index, sizerList, updateFunction }) => {
    const clickHandler = (itemId) => {
        const reducedList = sizerList.filter(function(obj) {
            return obj.id !== itemId;
        });

        updateFunction(sizerList => reducedList);
    }

    return (
        <>
            <img src={`images/${itemId}.svg`} className={`icon icon-${itemId}`} style={{ 'height': itemSize + '%' }}/>
            {index != 0 
                ? <div className="remove" onClick={() => clickHandler(itemId)}>X</div>
                : ''
            }
        </>
    );
}

export default SizerItem;
