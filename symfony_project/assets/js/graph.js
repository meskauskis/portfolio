import React, { useState } from 'react';

import SizerPicker from './sizerPicker';
import SizerItems from './sizerItems';

const Graph = ({ sizerData }) => {
    const defaultItem = sizerData.find((item) => item.default);

    const [sizerList, updateSizerList] = useState([defaultItem]);

    return (
        <>
            <SizerPicker updateFunction={updateSizerList} sizerList={sizerList} sizerData={sizerData}/>
            <SizerItems updateFunction={updateSizerList} sizerList={sizerList}/>
        </>
    );
};

export default Graph;
