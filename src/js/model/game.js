class Game {
  constructor (currentLocation, reverseCount, ) {
      this.currentLocation = currentLocation || 0;
      this.playerAlive = true || false;
      this.reverseCount = reverseCount || 3;
      // reverseCount is the number of times a player can choose to go back
      // to the previous location.
  }
  changeLocation() {
      // $('#make-decision').click()
  }
}

export { Game };
