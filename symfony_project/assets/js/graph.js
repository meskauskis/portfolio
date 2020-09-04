import React, { useState } from 'react';

import Button from './button';
import SizerPicker from './sizerPicker';
import SizerItems from './sizerItems';

const firstItem = {
    'id': 'man',
    'name': 'man',
    'height': 1.7,
};

const Graph = () => {
    const [sizerList, updateSizerList] = useState([firstItem]);

    return (
        <>
            <SizerPicker updateFunction={updateSizerList} sizerList={sizerList}/>
            <SizerItems updateFunction={updateSizerList} sizerList={sizerList}/>
        </>
    );
};

export default Graph;
