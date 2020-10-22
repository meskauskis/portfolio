import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Graph from './graph';

const sizerData = [
    {'id': 'man', 'name': 'Man', 'height': 1.7, 'category': null, 'default': true},
    {'id': 'giraffe', 'name': 'Giraffe', 'category': 'animal', 'height': 6},
    {'id': 'grizzly', 'name': 'Grizzly Bear', 'category': 'animal', 'height': 2.4},
    {'id': 'godzilla', 'name': 'Godzilla', 'category': 'fantasy', 'height': 108},
    {'id': 'gundam', 'name': 'Gundam', 'category': 'fantasy', 'height': 18},
    {'id': 'evangelion', 'name': 'Eva-01', 'category': 'fantasy', 'height': 42},
    {'id': 'cat', 'name': 'Cat', 'category': 'animal', 'height': 0.28},
    {'id': 'eiffel', 'name': 'Eiffel Tower', 'category': 'architecture', 'height': 324},
    {'id': 'empire', 'name': 'Empire State', 'category': 'architecture', 'height': 443},
    {'id': 'elephant', 'name': 'Elephant', 'category': 'animal', 'height': 3.4},
    {'id': 'ostrich', 'name': 'Ostrich', 'category': 'animal', 'height': 2.6},
    {'id': 'voltron', 'name': 'Voltron', 'category': 'fantasy', 'height': 100},
    {'id': 'atat', 'name': 'AT-AT', 'category': 'fantasy', 'height': 22},
    {'id': 'optimus', 'name': 'Optimus Prime', 'category': 'fantasy', 'height': 6.7},
    {'id': 'taipei', 'name': 'Taipei 101', 'category': 'architecture', 'height': 508},
    {'id': 'willis', 'name': 'Willis Tower', 'category': 'architecture', 'height': 520},
    {'id': 'burj', 'name': 'Burj Khalifa', 'category': 'architecture', 'height': 828},
    {'id': 'liberty', 'name': 'Statue Of Liberty', 'category': 'architecture', 'height': 93},
    {'id': 'tyrannosaurus', 'name': 'Tyrannosaurus', 'category': 'animal', 'height': 6},
    {'id': 'kong', 'name': 'King Kong', 'category': 'fantasy', 'height': 31},
    {'id': 'stay-puft', 'name': 'Stay Puft Marshmallow', 'category': 'fantasy', 'height': 34},
    {'id': 'spring-temple', 'name': 'Spring Temple Buddha', 'category': 'architecture', 'height': 208},
    {'id': 'christ', 'name': 'Christ The Redeemer', 'category': 'architecture', 'height': 30},
];

ReactDOM.render(
    <Graph sizerData={sizerData}/>,
    document.getElementById('React')
);
