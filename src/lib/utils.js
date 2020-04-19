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

  if (players.length ===2) {
    for(let i = 0; i <deck.length; i +=2) {
      players[0].hand.push(deck[i])
    }
    for(let i = 1; i <deck.length; i +=2) {
      players[1].hand.push(deck[i])
    }
  }
}

// players[1] starts a round by playing their card first and the card must be a heart, diamond, or club
// a player can only play a card that isn't the original card suit played if they do not have a card in that suit
// the first spade can not be played until a player has ran out of a card of the original suit played during a hand

const round = 0
const hand = 0 // maxes out to 13
const roundStarter = player[1]
const currentPlayer = players[1]
const players = []
const playerCards = []

/**
 * startGame
 * @description Starts a new game
 */

const startGame = () => {
  dealCards()
  //createBooks() // put how many point's you're going to get
  startRound()
  // await the players turn to happen
  // endTurn()
}

/**
 * createBooks
 * @description Allows the players to decide how many books they're going to declare for the score
 */

const createBooks = () => {
  
} 

/**
 * startRound
 * @description Starts a round of cards. A new deck will be created and shuffled and cards will be delt. 
 */

const startRound = () => {
  round ++
  hand = 1
  createBooks()
  startTurn()
}

/**
 * playHand
 * @description Allows players to play the next hand, if it's the last hand of a round changes the order and starts the next round
 */

const playHand = () => {
  // every 4th time nextPlayer is ran increase hand and || everytime it's players[0] turn
  if (hand < 13) {
    hand ++
  }  
  if (hand === 13) {
    calculateScore()
    rotatePlayerOrder()
    roundStarter = currentPlayer
    dealCards()
    startRound()
  }
}

/**
 * nextPlayer
 * @description Lets the next person "sitting" clockwise to play a card
 */

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

/**
 * startTurn
 * @description Starts a players turn, allowing them to play a card
 */

const startTurn = () => {
 currentPlayer.playCard = true
 playCard()
}

/**
 * endTurn
 * @description Ends a players turn, decides who the next player is, and starts their turn.
 * If the last player in a hand has gone, decide who won the hand.
 */

const endTurn = () => {
  currentPlayer.playCard = false
  // needs to vary depending on 2 or 4 players
  if (players.length === 4 && currentPlayer === players[3] && round > 1) {
    winningHand(tableCards)
  }
  if (players.length === 2 && currentPlayer === players[1] && round > 1) {
    winningHand(tableCards)
  }
  nextPlayer()
  startTurn()
}

/**
 * playCard
 * @description Allows a player to play a card from their hand
 */


const playCard = () => {
  // player can play a card...card gets added to tableCards
  // card = whatever the card the player plays from their hand
  tableCards.push(card)
  endTurn()
}

/**
 * winningHand
 * @description Decides which card wins the hand
 */

export const winningHand = (tableCards = []) => {
  // need something to verify that player doesn't have card suit in hand
  const tableSuit = tableCards[0].suit
  const newPowerLevel = tableCards.map(card => card.suit != tableSuit && card.suit != 'Spades' && card.suit != 'Joker' ? card.powerLevel = 0 : {value: card.value, suit: card.suit, powerLevel: card.powerLevel})
  const winningCard = Math.max(...newPowerLevel.powerLevel)
  // give book to winning player and start he 
  //playHand()
  return winningCard
}

/**
 * rotatePlayerOrder
 * @description After a round is over changes the order of players clockwise and a new player is the dealer
 */

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


/**
 * calculateScore
 * @description Calculates new score for a round
 */

export const calculateScore = () => {

}
