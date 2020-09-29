import React, { useState } from 'react';

import SizerItem from './sizerItem';

const SizerItems = ({ sizerList, updateSizerList, updateInfoBoxId, infoBoxId }) => {
    const heightsArray = sizerList.map(({ height }) => height);
    const tallestHeight = Math.max(...heightsArray);

    return (
        <div className="container2">
            <div className="container">
                {sizerList.map((item, index) => {
                    const itemId = item.id;
                    const itemHeight = item.height;

                    const itemSize = (itemHeight / tallestHeight) * 100;

                    return (
                        <div key={itemId} className="col">
                            <div className="liner"></div>

                            <SizerItem sizerList={sizerList} item={item} itemSize={itemSize} 
                            updateSizerList={updateSizerList} infoBoxId={infoBoxId} updateInfoBoxId={updateInfoBoxId}
                            infoBoxId={infoBoxId}/>
                        </div>
                    );
                })} 
            </div>
        </div>
    );
}

export default SizerItems;
