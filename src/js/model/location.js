import $ from 'jquery';
import _ from 'lodash';


class Game {
  constructor (currentLocation, reverseCount) {
      this.currentLocation = currentLocation || 0;
      this.reverseCount = reverseCount || 3;
      // reverseCount is the number of times a player can choose to go back
      // to the previous location.
  }
  changeLocation(location) {
      // $('#make-decision').click()
  }
}

class Location {
  constructor (name, previous, adjacentArray, id, imageUrl) {
    this.name = name;
    this.previous = previous;
    this.adjacent = adjacentArray;
    this.id = id;
    this.imageUrl = imageUrl;
  }

  updateDisplay() {
      $('#game-display').html(`<img src="${this.imageUrl}" alt="Image Not Found"/>`)
  }
};

// write a function that changes


export { Location, Game };
