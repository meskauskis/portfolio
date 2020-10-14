import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Graph from './graph';

const sizerData = [
    {'id': 'man', 'name': 'Man', 'height': 1.7, 'category': null, 'default': true},
    {'id': 'giraffe', 'name': 'Giraffe', 'category': 'animal', 'height': 6},
    {'id': 'grizzly', 'name': 'Grizzly Bear', 'category': 'animal', 'height': 2.4},
    {'id': 'godzilla', 'name': 'Godzilla', 'category': 'monster', 'height': 122},
    {'id': 'gundam', 'name': 'Gundam', 'category': 'monster', 'height': 18},
    {'id': 'evangelion', 'name': 'Eva-01', 'category': 'monster', 'height': 42.6},
    {'id': 'cat', 'name': 'Cat', 'category': 'animal', 'height': 0.26},
    {'id': 'paris', 'name': 'Eiffel Tower', 'category': 'architecture', 'height': 324},
    {'id': 'empire', 'name': 'Empire State', 'category': 'architecture', 'height': 443},
];

ReactDOM.render(
    <Graph sizerData={sizerData}/>,
    document.getElementById('React')
);
