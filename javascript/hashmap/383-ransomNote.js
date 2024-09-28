/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  let magazineMap = new Map();
  let ransomNoteMap = new Map();
  for (let item of magazine) {
    magazineMap.set(item, (magazineMap.get(item) || 0) + 1);
  }
  for (let item of ransomNote) {
    ransomNoteMap.set(item, (ransomNoteMap.get(item) || 0) + 1);
  }

  for (let [key, val] of ransomNoteMap) {
    if (!magazineMap.has(key) || val > magazineMap.get(key)) return false;
  }
  return true;
};

let ransomNote = "ca",
  magazine = "aab";
console.log(canConstruct(ransomNote, magazine));
