const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
}


PangramFinder.prototype.isPangram = function () {
  const hasEveryLetter = (letter) => this.isInPhrase(letter);
  return this.alphabet.every(hasEveryLetter);
}

PangramFinder.prototype.isInPhrase = function (input) {
  const found = this.phrase.find(letter => letter === input);
  return found;
}

module.exports = PangramFinder;
