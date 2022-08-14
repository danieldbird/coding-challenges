const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
const word = "abc";

// expected 9

// const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
// const word = "zaba";

// expected 28

function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyMap = h.map((height, index) => {
    return {
      letter: alphabet[index],
      height,
    };
  });

  const letters = word
    .split("")
    .map((letter) => {
      return {
        letter: keyMap[alphabet.indexOf(letter)].letter,
        height: keyMap[alphabet.indexOf(letter)].height,
      };
    })
    .sort((a, b) => a.height - b.height);

  return letters[letters.length - 1].height * letters.length;
}

console.log(designerPdfViewer(h, word));
