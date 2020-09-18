import React, { useState } from 'react';

import SizerItem from './sizerItem';

const ListItems = ({ sizerList, updateFunction }) => {
    const heightsArray = sizerList.map(({ height }) => height);
    const tallestHeight = Math.max(...heightsArray);

const [infoBoxId, setinfoBoxId] = useState(null);

    return (
        <>
            {sizerList.map((item, index) => {
                const itemId = item.id;
                const itemHeight = item.height;

                const itemSize = (itemHeight / tallestHeight) * 100;

                return (
                    <div className="col" key={itemId}>
                        <div className="liner"></div>
                        <SizerItem sizerList={sizerList} item={item} itemSize={itemSize} updateFunction={updateFunction} infoBoxId={infoBoxId} setinfoBoxId={setinfoBoxId}/>
                    </div>
                );
            })} 
        </>
    );
}

const SizerItems = ({ sizerList, updateFunction }) => {
    return (
        <div className="container2">
            <div className="container">
                <ListItems sizerList={sizerList} updateFunction={updateFunction}/>
            </div>
        </div>
    );
}

export default SizerItems;
