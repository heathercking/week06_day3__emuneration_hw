const IsogramFinder = function (word) {
    this.word = word;
}

// couldn't figure out how to do this without a loop!
IsogramFinder.prototype.isIsogram = function () {
    let lower = this.word.toLowerCase();
    let split = lower.split('');
    let sortedWord = split.sort();

    let previousLetter = "";
    let duplicate = true;

    for (var i = 0; i < sortedWord.length; i++) {
        if (sortedWord[i] === previousLetter) {
            let duplicate = false;
            return duplicate
        }
        previousLetter = sortedWord[i];
    } return duplicate;
}

module.exports = IsogramFinder;
