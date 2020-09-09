import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Graph from './graph';

const sizerData = [
    {'id': 'man', 'name': 'Man', 'height': 1.7, 'default': true},
    {'id': 'paris', 'name': 'Eiffel Tower', 'height': 324},
    {'id': 'empire', 'name': 'Empire State', 'height': 443},
    {'id': 'cat', 'name': 'Cat', 'height': 0.26},
    {'id': 'godzilla', 'name': 'Godzilla', 'height': 122},
];


ReactDOM.render(
    <Graph sizerData={sizerData}/>,
    document.getElementById('root')
);
