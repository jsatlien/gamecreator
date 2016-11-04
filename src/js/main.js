import $ from 'jquery';
import _ from 'lodash';

import { Location } from '../js/model/location.js'

var start = new Location ('The Weathered Tower', 0, [3,4,5], 1,'http://cdn.wallpapersafari.com/67/48/hcHPLl.jpg');

start.updateDisplay()
console.log(start)
