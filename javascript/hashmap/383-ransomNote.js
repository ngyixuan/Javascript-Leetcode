/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let magazineMap = new Array(26).fill(0);
  let a = "a".charCodeAt();
  if (!magazine) return false;
  for (const i of magazine) {
    magazineMap[i.charCodeAt() - a] += 1;
  }
  for (const i of ransomNote) {
    if (magazineMap[i.charCodeAt() - a] == 0) {
      return false;
    } else {
      magazineMap[i.charCodeAt() - a] -= 1;
    }
  }
  return true;
};

magazine = "ab";
ransomNote = "aa";
console.log(canConstruct(ransomNote, magazine));
