import React, { useState } from 'react';

import SizerItem from './sizerItem';

const ListItems = ({ sizerList, updateFunction }) => {
    const heightsArray = sizerList.map(({ height }) => height);
    const tallestHeight = Math.max(...heightsArray);

    return (
        <>
            {sizerList.map((item, index) => {
                const itemId = item.id;
                const itemHeight = item.height;

                const itemSize = (itemHeight / tallestHeight) * 100;

                return (
                    <div className="colBig" key={itemId}>
                        <div className="col">
                            <SizerItem itemId={itemId} itemSize={itemSize} index={index} sizerList={sizerList} 
                            updateFunction={updateFunction}/>
                        </div>
                        {itemSize != 100
                            ? <div className="line" style={{ 'top': (100 - itemSize) + '%' }}></div>
                            : ''
                        }
                    </div>
                );
            })} 
        </>
    );
}

const SizerItems = ({ sizerList, updateFunction }) => {
    return (
        <div className="container">
            <ListItems sizerList={sizerList} updateFunction={updateFunction}/>
        </div>
    );
}

export default SizerItems;
