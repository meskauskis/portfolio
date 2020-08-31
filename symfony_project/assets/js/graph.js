import React, { useState } from 'react';

import Button from './button';
import SizerPicker from './sizerPicker';
import SizerItems from './sizerItems';

const firstItem = {
    'name': 'man',
    'height': 100,
};

const Graph = () => {
    const [sizerList, updateSizerList] = useState([firstItem]);

    return (
        <>
            <SizerPicker updateFunction={updateSizerList} sizerList={sizerList}/>
            <div className="container">
                <SizerItems sizerList={sizerList}/>
            </div>
        </>
    );
};

export default Graph;
