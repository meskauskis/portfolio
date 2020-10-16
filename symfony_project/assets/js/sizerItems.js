import React, { useState } from 'react';

import SizerItem from './sizerItem';

const SizerItems = ({ sizerList, updateSizerList, unit }) => {
    const heightsArray = sizerList.map(({ height }) => height);
    const tallestHeight = Math.max(...heightsArray);

    return (
        <div className="container2">
            <div className="ground"></div>

            <div className="container">
                {sizerList.map((item, index) => {
                    const itemDefault = item.default;
                    const itemHeight = item.height;
                    const itemId = item.id;
                    const itemName = item.name;

                    const itemSize = (itemHeight / tallestHeight) * 100;
                    const itemHeightConverted = unit == 'm' ? itemHeight : Math.round(itemHeight * 3.281 * 10) / 10;

                    return (
                        <div key={itemId} className="col">
                            <div className="liner">
                                <div className="infoBox">
                                    {itemName}<br/>
                                    {itemHeightConverted} {unit}
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
