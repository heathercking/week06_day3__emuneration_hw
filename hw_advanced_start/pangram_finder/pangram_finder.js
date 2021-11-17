const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}


PangramFinder.prototype.isPangram = function () {
  const hasEveryLetter = (letter) => this.isInPhrase(letter);
  return this.alphabet.every(hasEveryLetter);
}

PangramFinder.prototype.isInPhrase = function (input) {
  let lowerPhrase = this.phrase.toLowerCase();
  let splitPhrase = lowerPhrase.split('');
  const found = splitPhrase.find(letter => letter === input);
  return found;
}


module.exports = PangramFinder;
