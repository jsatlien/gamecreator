import $ from 'jquery';
import _ from 'lodash';

class LocationConnector {
  constructor (location, choices) {
    this.name = location.name;
    this.id = location.id;
    this.description = location.description;
    this.imageUrl = location.imageUrl;
    this.adjacent = location.adjacent;
    this.choiceList = choices;
  }

  updateDisplay() {
      $('#game-display').html(`<img src="${this.imageUrl}" alt="Image Not Found"/>`)
      $('#option1').html(`${this.choiceList.choice1}`)
      $('#option2').html(`${this.choiceList.choice2}`)
      $('#option3').html(`${this.choiceList.choice3}`)
      // $('.location-description').html(`${this.description}`)

  }


};

export { LocationConnector };
