import React, { useState } from 'react';

import SizerNav from './sizerNav';
import SizerItems from './sizerItems';

const Graph = ({ sizerData }) => {
    const defaultItem = sizerData.find((item) => item.default);

    const [sizerList, updateSizerList] = useState([defaultItem]);
    const [unit, updateUnit] = useState('m');

    return (
        <>
            <SizerNav sizerData={sizerData} sizerList={sizerList} updateSizerList={updateSizerList}
            unit={unit} updateUnit={updateUnit}/>

            <SizerItems sizerList={sizerList} updateSizerList={updateSizerList} unit={unit}/>
        </>
    );
};

export default Graph;
