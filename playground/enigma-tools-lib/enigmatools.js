class CaesarCipher {
  static encode(string, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let rotatedAlphabet = rotateAlphabet(alphabet, shift);

    return replaceLetters(string, alphabet, rotatedAlphabet);
  }

  static decode(string, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let rotatedAlphabet = rotateAlphabet(alphabet, shift);

    return replaceLetters(string, rotatedAlphabet, alphabet);
  }
}

function rotateAlphabet(alphabet, shift) {
  alphabet = alphabet.split('');

  while (shift > 0) {
    alphabet.push(alphabet.shift());
    shift--;
  }

  return alphabet;
}

function replaceLetters(string, alphabetA, alphabetB) {
  let replaced = '';

  for (let character of string) {
    const index = alphabetA.indexOf(character);

    if (index != -1) {
      replaced += alphabetB[index];
    } else {
      replaced += character;
    }
  }

  return replaced;
}
