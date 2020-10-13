import React, { useState } from 'react';

import SizerNav from './sizerNav';
import SizerItems from './sizerItems';

const Graph = ({ sizerData }) => {
    const defaultItem = sizerData.find((item) => item.default);

    const [sizerList, updateSizerList] = useState([defaultItem]);
    const [infoBoxId, updateInfoBoxId] = useState(null);

    return (
        <>
            <SizerNav sizerData={sizerData} sizerList={sizerList} updateSizerList={updateSizerList}
            updateInfoBoxId={updateInfoBoxId}/>
            <SizerItems sizerList={sizerList} updateSizerList={updateSizerList}/>
        </>
    );
};

export default Graph;
