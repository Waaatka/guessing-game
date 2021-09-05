class GuessingGame {
    min
    max
    lastGuess
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.lastGuess = Math.round((this.min + this.max) / 2)
        return this.lastGuess
    }

    lower() {
        this.max = this.lastGuess
    }

    greater() {
        this.min = this.lastGuess
    }
}

module.exports = GuessingGame;
