class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) { return undefined } else {
      let len = this.cards.length;
      while (len > 0) {
        len--;
        let temp = this.cards[len];
        let rdmInd = Math.floor(Math.random() * len);
        this.cards[len] = this.cards[rdmInd];
        this.cards[rdmInd] = temp;
      }
    }
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1
    if (card1 === card2) {
      this.pairsGuessed += 1
      return true
    } else return false
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) { return true } else { return false }
  }}
