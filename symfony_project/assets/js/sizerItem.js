import React, { useState } from 'react';

const SizerItem = ({ itemId, itemSize }) => {
    return (
        <img src={`images/${itemId}.svg`} className={`icon icon-${itemId}`} style={{ 'height': itemSize + '%' }}/>
    );
}

export default SizerItem;
