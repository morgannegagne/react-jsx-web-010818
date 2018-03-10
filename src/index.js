import React from 'react';

import { message } from './components/foo';

import fruit from './components/fruits';
console.log(fruit.apple); // prints 'red'

// In another file, also in the same directory
import { apple } from './components/fruits';
console.log(apple); // prints 'red'
