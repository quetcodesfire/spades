import React from 'react'
import PropTypes from 'prop-types';

class Player {
  constructor(name = 'Player 1', hand = []) {
    this.name = name
    this.hand = hand
    this.handSize = this.hand.length,
    this.playCard = false
  }
}

export default Player