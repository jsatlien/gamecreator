import $ from 'jquery';
import _ from 'lodash';

import { LocationConnector } from './model/locationconnector.js';
import { Choices } from './model/choices.js';
import { Location } from './model/location.js';

var woodsDescription = 'A dark and brooding forest surrounds you. You see a path before you winding through the darkness. You glance in another direction to find a plume of smoke dancing behind the thick, untraversed foliage. Where will you go?'
var woodsLocation = new Location (1, 'Evil Woods', woodsDescription, 'http://images.wookmark.com/134700_121ff96196647f4f2dc784846cff2987.jpg', [4,2,3])
var woodsChoices = new Choices ('Follow the path.', 'Push through the foliage and investigate the smoke', 'Sit down and take a break.')
console.log(woodsLocation)

var woods = new LocationConnector (woodsLocation, woodsChoices)
console.log(woods)

woods.updateDisplay()
// var start = new LocationConnector ('The Weathered Tower', 0, [3,4,5], 1,'http://cdn.wallpapersafari.com/67/48/hcHPLl.jpg');

// start.updateDisplay()
// console.log(start)
