const AnagramFinder = function (word) {
    this.word = word;
}

// filter otherWords and only leave those meeting conditions of following functions
AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const result = otherWords.filter(word => this.checkOtherWord(word));
    return result;
}


//takes in one of the otherWords, splits into an array, and calls next function to check each letter against this.word
AnagramFinder.prototype.checkOtherWord = function (otherWord) {
    const splitOtherWord = otherWord.split('');
    const hasEveryLetter = (letter) => this.checkOtherWordLetters(letter);
    return splitOtherWord.every(hasEveryLetter);
}

//takes in a letter from one of the otherWords, and checks if it is in this.word
AnagramFinder.prototype.checkOtherWordLetters = function (otherWordLetter) {
    let splitOriginalWord = this.word.split('');
    const found = splitOriginalWord.find(letter => letter === otherWordLetter);
    return found
}

//split this.word into letters

//take in the array of otherwords
//assess one word at a time
//split the word into letters
//check each letter against the letters in this.word
//if all letters present, add whole word to new list

module.exports = AnagramFinder;
