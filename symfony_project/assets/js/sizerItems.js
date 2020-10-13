import React, { useState } from 'react';

import SizerItem from './sizerItem';

const SizerItems = ({ sizerList, updateSizerList }) => {
    const heightsArray = sizerList.map(({ height }) => height);
    const tallestHeight = Math.max(...heightsArray);

    return (
        <div className="container2">
            <div className="container">
                {sizerList.map((item, index) => {
                    const itemDefault = item.default;
                    const itemHeight = item.height;
                    const itemId = item.id;
                    const itemName = item.name;

                    const itemSize = (itemHeight / tallestHeight) * 100;

                    return (
                        <div key={itemId} className="col">

                            <div className="liner">
                                <div className="infoBox">
                                    {itemName}<br/>
                                    {itemHeight}m
                                </div>
                            </div>

                            <SizerItem item={item} itemSize={itemSize} 
                            sizerList={sizerList} updateSizerList={updateSizerList}/>
                        </div>
                    );
                })} 
            </div>
        </div>
    );
}

export default SizerItems;
