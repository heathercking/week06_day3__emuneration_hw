const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
}

// filter otherWords and only leave those meeting conditions of following functions
AnagramFinder.prototype.findAnagrams = function (otherWords) {
    const result = otherWords.filter((word) => {
        return this.checkOtherWord(word) && word.length === this.word.length && word !== this.word && word !== "";
    });
    return result;
}


//takes in one of the otherWords, splits into an array, and calls next function to check each letter against this.word
AnagramFinder.prototype.checkOtherWord = function (otherWord) {
    const lowerOtherWord = otherWord.toLowerCase();
    const splitOtherWord = lowerOtherWord.split('');
    const hasEveryLetter = (letter) => this.checkOtherWordLetters(letter);
    return splitOtherWord.every(hasEveryLetter);
}


//takes in a letter from one of the otherWords, and checks if it is in this.word
AnagramFinder.prototype.checkOtherWordLetters = function (otherWordLetter) {
    let splitOriginalWord = this.word.split('');
    const found = splitOriginalWord.find(letter => letter === otherWordLetter);
    return found
}










//checks if word is valid as an anagram
// AnagramFinder.prototype.isWordValid = function (word) {
//     if (word.length === this.word.length || word !== this.word || word !== "") {
//         return true;
//     } else {
//         return false;
//     }
// }








//split this.word into letters

//take in the array of otherwords
//assess one word at a time
//split the word into letters
//check each letter against the letters in this.word
//if all letters present, add whole word to new list

module.exports = AnagramFinder;
