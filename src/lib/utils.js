export const deck = [
  {value: '3', suit: 'Hearts', powerLevel: 3},
  {value: '4', suit: 'Hearts', powerLevel: 4},
  {value: '5', suit: 'Hearts', powerLevel: 5},
  {value: '6', suit: 'Hearts', powerLevel: 6},
  {value: '7', suit: 'Hearts', powerLevel: 7},
  {value: '8', suit: 'Hearts', powerLevel: 8},
  {value: '9', suit: 'Hearts', powerLevel: 9},
  {value: '10', suit: 'Hearts', powerLevel: 10},
  {value: 'J', suit: 'Hearts', powerLevel: 11},
  {value: 'Q', suit: 'Hearts', powerLevel: 12},
  {value: 'K', suit: 'Hearts', powerLevel: 13},
  {value: 'A', suit: 'Hearts', powerLevel: 14},
  {value: '3', suit: 'Diamonds', powerLevel: 3},
  {value: '4', suit: 'Diamonds', powerLevel: 4},
  {value: '5', suit: 'Diamonds', powerLevel: 5},
  {value: '6', suit: 'Diamonds', powerLevel: 6},
  {value: '7', suit: 'Diamonds', powerLevel: 7},
  {value: '8', suit: 'Diamonds', powerLevel: 8},
  {value: '9', suit: 'Diamonds', powerLevel: 9},
  {value: '10', suit: 'Diamonds', powerLevel: 10},
  {value: 'J', suit: 'Diamonds', powerLevel: 11},
  {value: 'Q', suit: 'Diamonds', powerLevel: 12},
  {value: 'K', suit: 'Diamonds', powerLevel: 13},
  {value: 'A', suit: 'Diamonds', powerLevel: 14},
  {value: '2', suit: 'Clubs', powerLevel: 2},
  {value: '3', suit: 'Clubs', powerLevel: 3},
  {value: '4', suit: 'Clubs', powerLevel: 4},
  {value: '5', suit: 'Clubs', powerLevel: 5},
  {value: '6', suit: 'Clubs', powerLevel: 6},
  {value: '7', suit: 'Clubs', powerLevel: 7},
  {value: '8', suit: 'Clubs', powerLevel: 8},
  {value: '9', suit: 'Clubs', powerLevel: 9},
  {value: '10', suit: 'Clubs', powerLevel: 10},
  {value: 'J', suit: 'Clubs', powerLevel: 11},
  {value: 'Q', suit: 'Clubs', powerLevel: 12},
  {value: 'K', suit: 'Clubs', powerLevel: 13},
  {value: 'A', suit: 'Clubs', powerLevel: 14},
  {value: '2', suit: 'Spades', powerLevel: 27},
  {value: '3', suit: 'Spades', powerLevel: 15},
  {value: '4', suit: 'Spades', powerLevel: 16},
  {value: '5', suit: 'Spades', powerLevel: 17},
  {value: '6', suit: 'Spades', powerLevel: 18},
  {value: '7', suit: 'Spades', powerLevel: 19},
  {value: '8', suit: 'Spades', powerLevel: 20},
  {value: '9', suit: 'Spades', powerLevel: 21},
  {value: '10', suit: 'Spades', powerLevel: 22},
  {value: 'J', suit: 'Spades', powerLevel: 23},
  {value: 'Q', suit: 'Spades', powerLevel: 24},
  {value: 'K', suit: 'Spades', powerLevel: 25},
  {value: 'A', suit: 'Spades', powerLevel: 26},
  {value: 'Little Joker', suit: 'Joker', powerLevel: 28},
  {value: 'Big Joker', suit: 'Joker', powerLevel: 29}
]

export const shuffle = deck => {
  var x, y, i
  for (i = deck.length - 1; i > 0; i--) {
    x = Math.floor(Math.random() * (i + 1))
    y = deck[i]
    deck[i] = deck[x]
    deck[x] = y
  }
  return deck
}

export const dealCards = () => {
  shuffle(deck)

  if (players.length === 4) {
    for (let i = 0; i < deck.length; i += 4) {
      players[0].hand.push(deck[i])
    }
    for (let i = 1; i < deck.length; i += 4) {
      players[1].hand.push(deck[i])
    }
    for (let i = 2; i < deck.length; i += 4) {
      players[2].hand.push(deck[i])
    }
    for (let i = 3; i < deck.length; i += 4) {
      players[3].hand.push(deck[i])
    }
  }
}

// there needs to be a rounds and hands rounds can go to however many to win hands can go up to 13
// players[1] starts a round by playing their card first and the card must be a heart, diamond, or club
// a player can only play a card that isn't the original card suit played if they do not have a card in that suit
// the first spade can not be played until a player has ran out of a card of the original suit played during a hand

const round = 0
const hand = 0
const roundStarter = player[1]
const currentPlayer = players[1]
const players = []

const startGame = () => {
  dealCards()
  startRound()
  // await the players turn to happen
  // endTurn()
}

const startRound = () => {
  round ++
  hand = 1
  // setEstimate() // estimate score
  startTurn()
}

const playHands = () => {
  // every 4th time nextPlayer is ran increase hand and || everytime it's players[0] turn
  if (hand > 13) {
    hand ++
  }  
  if (hand === 13) {
    // calculateScore()
    rotatePlayerOrder()
    roundStarter = currentPlayer
    startRound()
  }
}

const nextPlayer = () => {
  if (currentPlayer === players[0]) {
    return currentPlayer = player[1]
  }
  if (currentPlayer === players[1]) {
    return currentPlayer = player[2]
  }
  if (currentPlayer === players[2]) {
    return currentPlayer = player[3]
  }
  if (currentPlayer === players[3]) {
    return currentPlayer = player[0]
  }
}

const startTurn = () => {
  return currentPlayer.playCard = true
}

const endTurn = () => {
  currentPlayer.playCard = false
  nextPlayer()
  startTurn()
}


const round = () => {
  if (hand = 1) {
    toggleStartTurn(players)
  }
}

export const winningHand = (tableCards = []) => {
  // need something to verify that player doesn't have card suit in hand
  const tableSuit = tableCards[0].suit
  const newPowerLevel = tableCards.map(card => card.suit != tableSuit && card.suit != 'Spades' && card.suit != 'Joker' ? card.powerLevel = 0 : card.powerLevel = card.powerLevel)
  const winningCard = Math.max(...newPowerLevel)
  return winningCard
}

export const rotatePlayerOrder = () => {
  let newOrder = []

  if (players.length === 4) {
    newOrder[0] = players[1]
    newOrder[1] = players[2]
    newOrder[2] = players[3]
    newOrder[3] = players[0]
  }
  if (players.length === 2) {
    newOrder[0] = players[1]
    newOrder[1] = players[0]
  }

  players = newOrders
  
  return players
}
