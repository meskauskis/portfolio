import React, { useState } from 'react';

import SizerItem from './sizerItem';

const SizerItems = ({ sizerList, updateSizerList, unit }) => {
    const heightsArray = sizerList.map(({ height }) => height);
    const tallestHeight = Math.max(...heightsArray);

    return (
        <div className="SizerContainerWrap">
            <div className="SizerGround"></div>

            <div className="SizerContainer">
                {sizerList.map((item, index) => {
                    const itemDefault = item.default;
                    const itemHeight = item.height;
                    const itemId = item.id;
                    const itemName = item.name;

                    const itemSize = (itemHeight / tallestHeight) * 100;
                    const itemHeightConverted = unit == 'm' ? itemHeight : Math.round(itemHeight * 3.281 * 10) / 10;

                    return (
                        <div key={itemId} className="SizerContainer-col">
                            <div className="SizerContainer-line">
                                <div className="SizerContainer-info">
                                    <div className="SizerContainer-infoName">
                                        {itemName}
                                    </div>
                                    <div className="SizerContainer-infoUnit">
                                        {itemHeightConverted} {unit}
                                    </div>
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
