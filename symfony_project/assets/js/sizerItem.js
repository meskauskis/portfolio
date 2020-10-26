import React, { useState } from 'react';

const SizerItem = ({ sizerList, item, itemSize, updateSizerList }) => {
    const itemDefault = typeof item.default !== 'undefined' && item.default ? true : false;
    const itemId = item.id;

    const currentItem = sizerList.map(({ ...item }) => itemId);

    const closeItem = (itemDefault, itemId) => {
        if (itemDefault) {
            return false;
        }

        const reducedList = sizerList.filter(function(obj) {
            return obj.id !== itemId;
        });
    
        updateSizerList(sizerList => reducedList);
    }

    return (
        <>
            <img src={`images/items/${itemId}.svg`} className={`SizerContainer-item SizerContainer-item--${itemId}`} style={{ 
                'height': itemSize + '%', 
            }}/>

            <img src={`images/button-remove.svg`} className={`Button--close ${itemDefault ? 'is-default' : ''}`} 
            onClick={() => closeItem(itemDefault, itemId)}/>
        </>
    );
}

export default SizerItem;
