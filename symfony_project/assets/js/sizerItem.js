import React, { useState } from 'react';

const SizerItem = ({ sizerList, item, itemSize, updateSizerList, updateInfoBoxId, infoBoxId }) => {
    const itemDefault = typeof item.default !== 'undefined' && item.default ? true : false;
    const itemId = item.id;

    const clickHandlerInfo = (itemId) => {
        // Close if it's already open.
        updateInfoBoxId(infoBoxId == itemId ? null : itemId);
    }

    const clickHandlerClose = (itemId) => {
        const reducedList = sizerList.filter(function(obj) {
            return obj.id !== itemId;
        });
    
        updateSizerList(sizerList => reducedList);
    }

    const currentItem = sizerList.map(({ ...item }) => itemId);

    return (
        <>
            <img src={`images/${itemId}.svg`} className={`icon icon-${itemId}`} style={{ 'height': itemSize + '%' }}/>
            <img src={`images/button-info.svg`} className="Col-button Col-button--info" onClick={() => clickHandlerInfo(itemId)}/>

            {itemId == infoBoxId
                ? 
                    <div className="infoBox">
                        {item.name}<br/>
                        {item.height}m

                        {!itemDefault
                            ? <img src={`images/button-info.svg`} className="closeButton" onClick={() => clickHandlerClose(itemId)}/>
                            : ''
                        }
                    </div>
                : '' 
            }
        </>
    );
}

export default SizerItem;
