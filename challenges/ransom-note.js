const ransomNote = "aabaa";
const magazine = "aaaab";

const canConstruct = function (ransomNote, magazine) {
  let can = true;
  const note = ransomNote.split("");
  const mag = magazine.split("");
  note.forEach((letter) => {
    const noteCount = note.filter((item) => item === letter).length;
    const magCount = mag.filter((item) => item === letter).length;
    if (noteCount > magCount) {
      can = false;
    }
  });
  return can;
};

console.log(canConstruct(ransomNote, magazine));
