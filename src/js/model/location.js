import $ from 'jquery';
import _ from 'lodash';


class Location {
  constructor (previous, adjacentArray, id) {
  this.previous = previous;
  this.adjacent = adjacentArray;
  this.id = id;
  }
};


export { Location };
