import React, { useState } from 'react';

const SizerItems = ({ sizerList }) => {
    console.log(sizerList);
    const listItems = sizerList.map((item, index) => {
        const itemName = item.name;
        const itemHeight = item.height;
        
        const itemSize = (itemHeight / 1000) * 100;

/*
            var height = $(this).attr('data-height');
            var size = (height / base) * 100

            if (height != base) {
                $(this).css('height', size + '%');
            }
*/

        return (
            <div className="col" key={index + itemName}>
                <img src={`images/${itemName}.svg`} className={`icon icon-${itemName}`} style={{ 'height': itemSize + '%' }}/>
            </div>
        );
    });

    return (
        <>
            {listItems}
        </>
    );
}

export default SizerItems;
