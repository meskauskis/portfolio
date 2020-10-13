import React, { useState } from 'react';

const SizerItem = ({ sizerList, item, itemSize, updateSizerList }) => {
    const itemDefault = typeof item.default !== 'undefined' && item.default ? true : false;
    const itemId = item.id;

    const clickHandlerClose = (itemDefault, itemId) => {
        if (itemDefault) {
            return false;
        }

        const reducedList = sizerList.filter(function(obj) {
            return obj.id !== itemId;
        });
    
        updateSizerList(sizerList => reducedList);
    }

    const currentItem = sizerList.map(({ ...item }) => itemId);

    return (
        <>
            <img src={`images/${itemId}.svg`} className={`icon icon-${itemId}`} style={{ 
                'height': itemSize + '%', 
            }}/>

            <img src={`images/button-remove.svg`} className={`Col-button Col-button--close ${itemDefault ? 'is-default' : ''}`} 
            onClick={() => clickHandlerClose(itemDefault, itemId)}/>
        </>
    );
}

export default SizerItem;
