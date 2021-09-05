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
        let x = (this.min + this.max) / 2;
        this.lastGuess = Math.round(x)
        return this.lastGuess
    }

    lower() {
        if (this.max <= this.min + 1) {
            return
        }
        this.max = this.lastGuess - 1
    }

    greater() {
        if (this.max <= this.min + 1) {
            return
        }
        this.min = this.lastGuess + 1
    }
}

module.exports = GuessingGame;
