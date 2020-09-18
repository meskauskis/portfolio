import React, { useState } from 'react';

const SizerItem = ({ sizerList, item, itemSize, updateFunction, infoBoxId, setinfoBoxId }) => {
    const itemId = item.id;

    const clickHandler = (itemId) => {
        console.log('id');
        console.log(itemId);
        /*
        const reducedList = sizerList.filter(function(obj) {
            return obj.id !== itemId;
        });

        updateFunction(sizerList => reducedList);
        */
        setinfoBoxId(infoBoxId == itemId ? null : itemId);
    }

    const currentItem = sizerList.map(({ ...item }) => itemId);

    return (
        <>
            <img src={`images/${itemId}.svg`} className={`icon icon-${itemId}`} style={{ 'height': itemSize + '%' }}/>
            <img src={`images/button-info.svg`} className="Col-button Col-button--info" onClick={() => clickHandler(itemId)}/>

            {/*
            {itemId == infoBoxId
                ? 
                    <div className="infoBox">
                        {item.name}<br/>
                        {item.height}m
                    </div>
                : '' 
            }
            */}
        </>
    );
}

export default SizerItem;
