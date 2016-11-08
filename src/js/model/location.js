import $ from 'jquery';
import _ from 'lodash';

import { Choices } from './choices.js'


class Location {
  constructor (name, previous, adjacentArray, id, imageUrl, choices) {
    this.name = name;
    this.previous = previous;
    this.adjacent = adjacentArray;
    this.id = id;
    this.imageUrl = imageUrl;
    this.choiceList = new Choices (choices);
  }

  updateDisplay() {
      $('#game-display').html(`<img src="${this.imageUrl}" alt="Image Not Found"/>`)
  }


};

export { Location };
